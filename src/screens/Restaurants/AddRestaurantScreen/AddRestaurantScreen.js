/** @format */

import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { db } from "../../../utils";
import {
	InfoForm,
	UploadImagesForm,
	ImageRestaurant,
} from "../../../components/Restaurants/AddRestaurant";
import { initialValues, validationSchema } from "./AddRestaurantScreen.data";
import { styles } from "./AddRestaurantScreen.styles";

export function AddRestaurantScreen() {
	const navigation = useNavigation();

	const formik = useFormik({
		initialValues: initialValues(),
		validationSchema: validationSchema(),
		validateOnChange: false,
		onSubmit: async (formValues) => {
			try {
				const newData = formValues;
				newData.id = uuid();
				newData.createdAt = new Date();

				await setDoc(doc(db, "restaurants", newData.id), newData);
				// const myDB = doc(db, "restaurants", newData.id);
				// await setDoc(myDB, newData);

				Toast.show({
					type: "success",
					position: "top",
					text1: "Restaurante creado",
					text2: "Se ha creado correctamente",
					visibilityTime: 3000,
				});

				navigation.goBack();
			} catch (error) {
				Toast.show({
					type: "error",
					position: "top",
					text1: "Error al crear el restaurante",
					text2: "Intente más tarde",
				});
			}
		},
	});

	return (
		<KeyboardAwareScrollView
			showsVerticalScrollIndicator={false}
			style={styles.content}>
			<ImageRestaurant formik={formik} />
			<InfoForm formik={formik} />
			<UploadImagesForm formik={formik} />
			<Button
				title='Crear restaurante'
				buttonStyle={styles.button}
				onPress={formik.handleSubmit}
				loading={formik.isSubmitting}
			/>
		</KeyboardAwareScrollView>
	);
}
