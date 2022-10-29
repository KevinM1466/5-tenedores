/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../utils";

export const styles = StyleSheet.create({
	btn: {
		marginTop: 30,
		paddingVertical: 10,
		borderRadius: 0,
		backgroundColor: color.whiteBackground.colorName,
		borderTopWidth: 1,
		borderTopColor: color.gray.gray3,
		borderBottomWidth: 1,
		borderBottomColor: color.gray.gray3,
	},
	btnTitle: {
		color: color.green.colorName,
	},
});
