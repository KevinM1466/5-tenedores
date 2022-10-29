/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	content: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 30,
	},
	input: {
		width: "100%",
		marginTop: 20,
	},
	icon: {
		color: color.gray.gray2,
	},
	btnContainer: {
		marginTop: 20,
		width: "95%",
	},
	btn: {
		backgroundColor: color.green.colorName,
	},
});
