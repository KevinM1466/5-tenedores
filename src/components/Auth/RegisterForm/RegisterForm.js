/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { Input, Icon, Button } from "react-native-elements";
import { useFormik } from "formik";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { screen } from "../../../utils";
import { initialValues, validationSchema } from "./RegisterForm.data";
import { styles } from "./RegisterForm.styles";

export function RegisterForm() {
	const [showPassword, setShowPassword] = useState(false);
	const [showRepeatPassword, setShowRepeatPassword] = useState(false);
	const navigation = useNavigation();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				const auth = getAuth();
				await createUserWithEmailAndPassword(
					auth,
					formValue.email,
					formValue.password
				);
				navigation.navigate(screen.account.account);
				Toast.show({
					type: "success",
					position: "top",
					text1: "Registro correcto",
					text2: "Se ha registrado correctamente",
					visibilityTime: 3000,
				});
			} catch (error) {
				Toast.show({
					type: "error",
					position: "top",
					text1: "Error al crear la cuenta",
					text2: "El correo ya está en uso",
				});
			}
		},
	});

	const showHiddenPassword = () => setShowPassword((prevState) => !prevState);
	const showHiddenRepeatPassword = () =>
		setShowRepeatPassword((prevState) => !prevState);

	return (
		<View style={styles.content}>
			<Input
				keyboardType='email-address'
				placeholder='Correo Electrónico'
				containerStyle={styles.input}
				rightIcon={
					<Icon type='font-awesome-5' name='envelope' style={styles.icon} />
				}
				onChangeText={(text) => formik.setFieldValue("email", text)}
				errorMessage={formik.errors.email}
			/>
			<Input
				placeholder='Contraseña'
				containerStyle={styles.input}
				secureTextEntry={showPassword ? false : true}
				rightIcon={
					<Icon
						type='font-awesome-5'
						name={showPassword ? "eye-slash" : "eye"}
						style={styles.icon}
						onPress={showHiddenPassword}
					/>
				}
				onChangeText={(text) => formik.setFieldValue("password", text)}
				errorMessage={formik.errors.password}
			/>
			<Input
				placeholder='Confirmar Contraseña'
				containerStyle={styles.input}
				secureTextEntry={showRepeatPassword ? false : true}
				rightIcon={
					<Icon
						type='font-awesome-5'
						name={showRepeatPassword ? "eye-slash" : "eye"}
						style={styles.icon}
						onPress={showHiddenRepeatPassword}
					/>
				}
				onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
				errorMessage={formik.errors.repeatPassword}
			/>
			<Button
				title='Registrarse'
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={formik.handleSubmit}
				loading={formik.isSubmitting}
			/>
		</View>
	);
}
