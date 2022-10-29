/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { useFormik } from "formik";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Toast from "react-native-toast-message";
import { screen } from "../../../utils";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./LoginForm.data";
import { styles } from "./LoginForm.styles";

export function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	const showHiddenPassword = () => setShowPassword((prevState) => !prevState);
	const navigation = useNavigation();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValue) => {
			try {
				const auth = getAuth();
				await signInWithEmailAndPassword(
					auth,
					formValue.email,
					formValue.password
				);
				navigation.navigate(screen.account.account);
			} catch (error) {
				Toast.show({
					type: "error",
					position: "top",
					text1: "Error al iniciar sesión",
					text2: "El correo o la contraseña son incorrectos",
					visibilityTime: 3000,
				});
			}
		},
	});

	return (
		<View style={styles.content}>
			<Input
				keyboardType='email-address'
				placeholder='Correo electrónico'
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
			<Button
				title='Iniciar sesión'
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={formik.handleSubmit}
				loading={formik.isSubmitting}
			/>
		</View>
	);
}
