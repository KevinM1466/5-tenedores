/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { color } from "../../../utils";
import { useFormik } from "formik";
import {
	getAuth,
	updatePassword,
	EmailAuthProvider,
	reauthenticateWithCredential,
} from "firebase/auth";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangePasswordForm.data";
import { styles } from "./ChangePasswordForm.styles";

export function ChangePasswordForm(props) {
	const { onClose } = props;
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
				await updatePassword(currentUser, formValues.newPassword);
				onClose();
				Toast.show({
					type: "success",
					position: "top",
					text1: "Contraseña actualizada",
					text2: "Tu contraseña se ha actualizado correctamente",
				});
			} catch (error) {
				onClose();
				Toast.show({
					type: "error",
					text1: "Error al cambiar la contraseña",
					text2: "Comprueba que la contraseña actual sea correcta",
				});
			}
		},
	});

	return (
		<View style={styles.content}>
			<Input
				placeholder='Contraseña actual'
				containerStyle={styles.input}
				secureTextEntry={showPassword ? false : true}
				rightIcon={{
					type: "font-awesome-5",
					name: showPassword ? "eye-slash" : "eye",
					color: color.gray.gray4,
					onPress: onShowPassword,
				}}
				onChange={(e) => formik.setFieldValue("password", e.nativeEvent.text)}
				errorMessage={formik.errors.password}
			/>
			<Input
				placeholder='Nueva contraseña'
				containerStyle={styles.input}
				secureTextEntry={showPassword ? false : true}
				rightIcon={{
					type: "font-awesome-5",
					name: showPassword ? "eye-slash" : "eye",
					color: color.gray.gray4,
					onPress: onShowPassword,
				}}
				onChange={(e) =>
					formik.setFieldValue("newPassword", e.nativeEvent.text)
				}
				errorMessage={formik.errors.newPassword}
			/>
			<Input
				placeholder='Confirmar nueva contraseña'
				containerStyle={styles.input}
				secureTextEntry={showPassword ? false : true}
				rightIcon={{
					type: "font-awesome-5",
					name: showPassword ? "eye-slash" : "eye",
					color: color.gray.gray4,
					onPress: onShowPassword,
				}}
				onChange={(e) =>
					formik.setFieldValue("confirmNewPassword", e.nativeEvent.text)
				}
				errorMessage={formik.errors.confirmNewPassword}
			/>
			<Button
				title='Cambiar contraseña'
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={formik.handleSubmit}
				loading={formik.isSubmitting}
			/>
		</View>
	);
}
