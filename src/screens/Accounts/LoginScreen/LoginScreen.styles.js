/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	image: {
		resizeMode: "contain",
		height: 150,
		width: "100%",
		marginTop: 20,
	},
	container: {
		marginHorizontal: 40,
	},
	textRegister: {
		marginTop: 15,
		marginHorizontal: 10,
	},
	btnRegister: {
		color: color.green.colorName,
		fontWeight: "bold",
	},
});
