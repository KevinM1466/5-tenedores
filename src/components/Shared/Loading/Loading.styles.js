/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	content: {
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
