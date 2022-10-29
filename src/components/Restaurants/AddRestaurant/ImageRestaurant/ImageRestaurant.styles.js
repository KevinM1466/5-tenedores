/** @format */

import { StyleSheet, Dimensions } from "react-native";
import { color } from "../../../../utils";

const widthScreen = Dimensions.get("window").width;

export const styles = StyleSheet.create({
	content: {
		marginBottom: 20,
	},
	image: {
		height: 250,
		width: widthScreen,
		marginBottom: 20,
	},
});
