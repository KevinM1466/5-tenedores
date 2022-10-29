/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../../utils";

export const styles = StyleSheet.create({
	viewImages: {
		flexDirection: "row",
		marginHorizontal: 20,
		marginTop: 30,
	},
	containerIcon: {
		justifyContent: "center",
		marginRight: 10,
		backgroundColor: color.gray.gray3,
		width: 70,
		height: 70,
	},
	error: {
		marginHorizontal: 20,
		marginTop: 10,
		color: color.red.red2,
		fontSize: 12,
		paddingLeft: 6,
	},
	image: {
		width: 70,
		height: 70,
		marginRight: 10,
	},
	icon: {
		alignItems: "left",
	},
});
