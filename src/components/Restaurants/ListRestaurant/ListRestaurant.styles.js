/** @format */

import { StyleSheet } from "react-native";
import { color, screen } from "../../../utils";

export const styles = StyleSheet.create({
	viewRestaurant: {
		flexDirection: "row",
		margin: 10,
	},
	imageRestaurant: {
		width: 80,
		height: 80,
		marginRight: 15,
	},
	name: {
		fontWeight: "bold",
	},
	info: {
		color: color.gray.colorName,
		marginTop: 3,
		paddingRight: 100,
	},
});
