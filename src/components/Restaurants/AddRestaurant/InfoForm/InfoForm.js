/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { Input } from "react-native-elements";
import { MapForm } from "../../AddRestaurant";
import { color } from "../../../../utils";
import { styles } from "./InfoForm.styles";

export function InfoForm(props) {
	const { formik } = props;
	const [showMap, setShowMap] = useState(false);

	const onOpenCloseMap = () => setShowMap((prevState) => !prevState);

	return (
		<>
			<View>
				<Input
					placeholder='Nombre del restaurante'
					onChangeText={(text) => formik.setFieldValue("name", text)}
					errorMessage={formik.errors.name}
				/>
				<Input
					placeholder='Dirección'
					rightIcon={{
						type: "font-awesome-5",
						name: "directions",
						color: getColorIconMap(formik),
						onPress: onOpenCloseMap,
					}}
					onChangeText={(text) => formik.setFieldValue("address", text)}
					errorMessage={formik.errors.address}
				/>
				<Input
					keyboardType='number-pad'
					placeholder='Teléfono'
					onChangeText={(text) => formik.setFieldValue("phone", text)}
					errorMessage={formik.errors.phone}
				/>
				<Input
					keyboardType='email-address'
					placeholder='Email'
					onChangeText={(text) => formik.setFieldValue("email", text)}
					errorMessage={formik.errors.email}
				/>

				<Input
					placeholder='Descripción del restaurante'
					multiline={true}
					inputContainerStyle={styles.textArea}
					onChangeText={(text) => formik.setFieldValue("description", text)}
					errorMessage={formik.errors.description}
				/>
			</View>
			<MapForm show={showMap} close={onOpenCloseMap} formik={formik} />
		</>
	);
}

const getColorIconMap = (formik) => {
	if (formik.errors.location) {
		return color.red.red2;
	} else if (formik.values.location) {
		return color.green.colorName;
	} else {
		return color.gray.gray4;
	}
};
