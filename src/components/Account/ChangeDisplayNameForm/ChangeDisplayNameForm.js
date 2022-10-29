/** @format */

import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { styles } from "./ChangeDisplayNameForm.styles";
import { useFormik } from "formik";
import { getAuth, updateProfile } from "firebase/auth";
import Toast from "react-native-toast-message";
import { initialValues, validationSchema } from "./ChangeDisplayNameForm.data";
import { color } from "../../../utils";

export function ChangeDisplayNameForm(props) {
	const { onClose, onReload } = props;
	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValues) => {
			try {
				const { displayName } = formValues;
				const currentUser = getAuth().currentUser;
				await updateProfile(currentUser, { displayName });
				onReload();
				onClose();
				Toast.show({
					type: "success",
					position: "top",
					text1: "Nombre actualizado",
					text2: "El nombre se ha actualizado correctamente",
				});
			} catch (error) {
				Toast.show({
					type: "error",
					position: "top",
					text1: "Error al actualizar los datos",
					text2: error.message,
				});
			}
		},
	});

	return (
		<View styles={styles.content}>
			<Input
				placeholder='Nombre y apellidos'
				rightIcon={{
					type: "font-awesome-5",
					name: "user-circle",
					color: color.gray.gray4,
				}}
				onChangeText={(text) => formik.setFieldValue("displayName", text)}
				errorMessage={formik.errors.displayName}
			/>

			<Button
				title='Aceptar'
				containerStyle={styles.btnContainer}
				buttonStyle={styles.btn}
				onPress={formik.handleSubmit}
				loading={formik.isSubmitting}
			/>
		</View>
	);
}
