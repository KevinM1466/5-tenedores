/** @format */

import React from "react";
import { View, Text } from "react-native";
import { Image } from "react-native-elements";
import { styles } from "./ImageRestaurant.styles";

export function ImageRestaurant(props) {
	const { formik } = props;

	const primaryImage = formik.values.images[0];

	return (
		<View styles={styles.content}>
			<Image
				source={
					primaryImage
						? { uri: primaryImage }
						: require("../../../../../assets/img/imageNotFound.png")
				}
				style={styles.image}
			/>
		</View>
	);
}
