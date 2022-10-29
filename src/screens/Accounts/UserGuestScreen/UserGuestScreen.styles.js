/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	content: {
		marginHorizontal: 30,
	},
	image: {
		resizeMode: "contain",
		height: 300,
		width: "100%",
		marginBottom: 40,
	},
	title: {
		fontWeight: "bold",
		fontSize: 19,
		marginBottom: 10,
		textAlign: "center",
	},
	description: {
		textAlign: "center",
		marginBottom: 20,
	},
	btnStyle: {
		backgroundColor: color.green.colorName,
	},
});
