/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import {
	getAuth,
	updateEmail,
	EmailAuthProvider,
	reauthenticateWithCredential,
} from "firebase/auth";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangeEmailForm.data";
import { styles } from "./ChangeEmailForm.styles";
import { color } from "../../../utils";

export function ChangeEmailForm(props) {
	const { onClose, onReload } = props;
	const [showPassword, setShowPassword] = useState(false);

	const onShowPassword = () => setShowPassword((prevState) => !prevState);

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValues) => {
			try {
				const currentUser = getAuth().currentUser;
				const credentials = EmailAuthProvider.credential(
					currentUser.email,
					formValues.password
				);
				await reauthenticateWithCredential(currentUser, credentials);
				await updateEmail(currentUser, formValues.email);
				onReload();
				onClose();
				Toast.show({
					type: "success",
					position: "top",
					text1: "Datos actualizados",
					text2: "Se ha actualizado el correo correctamente",
					visibilityTime: 3000,
				});
			} catch (error) {
				Toast.show({
					type: "error",
					position: "top",
					text1: "Error al actualizar los datos",
					text2: "La contraseña es incorrecta",
					visibilityTime: 3000,
				});
			}
		},
	});

	return (
		<View styles={styles.content}>
			<Input
				placeholder='Nuevo Correo electrónico'
				containerStyle={styles.input}
				rightIcon={{
					type: "font-awesome-5",
					name: "envelope",
					color: color.gray.gray4,
				}}
				onChangeText={(text) => formik.setFieldValue("email", text)}
				errorMessage={formik.errors.email}
			/>
			<Input
				placeholder='Contraseña'
				containerStyle={styles.input}
				secureTextEntry={showPassword ? false : true}
				rightIcon={{
					type: "font-awesome-5",
					name: showPassword ? "eye-slash" : "eye",
					color: color.gray.gray4,
					onPress: onShowPassword,
				}}
				onChangeText={(text) => formik.setFieldValue("password", text)}
				errorMessage={formik.errors.password}
			/>
			<Button
				title='Cambiar correo electrónico'
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={formik.handleSubmit}
				loading={formik.isSubmitting}
			/>
		</View>
	);
}
