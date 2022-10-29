/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	overlay: {
		height: 100,
		width: 200,
		backgroundColor: color.whiteBackground.colorName,
		borderColor: color.green.colorName,
		borderWidth: 2,
		borderRadius: 10,
	},
	view: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	text: {
		color: color.green.colorName,
		textTransform: "uppercase",
		marginTop: 10,
	},
});
