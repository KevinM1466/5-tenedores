/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	content: {
		alignItems: "center",
		justifyContent: "center",
		flexDirection: "row",
		paddingVertical: 30,
	},
	avatar: {
		marginRight: 20,
		backgroundColor: color.green.colorName,
	},
	displayName: {
		fontWeight: "bold",
		paddingBottom: 5,
	},
});
