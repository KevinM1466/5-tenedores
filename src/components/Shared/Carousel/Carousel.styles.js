/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	content: {
		position: "relative",
	},
	containerPagination: {
		position: "absolute",
		bottom: 0,
		left: 0,
		width: "100%",
		height: 70,
		paddingBottom: 0,
	},
	dotStyle: {
		backgroundColor: color.green.colorName,
	},
});
