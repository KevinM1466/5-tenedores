/** @format */

import { StyleSheet } from "react-native";
import { color } from "../../../../utils";

export const styles = StyleSheet.create({
	map: {
		height: 550,
		width: "100%",
	},
	mapActions: {
		flexDirection: "row",
		justifyContent: "center",
		marginTop: 10,
	},
	btnMapContainerSave: {
		paddingRight: 5,
		width: "50%",
	},
	btnMapSave: {
		backgroundColor: color.green.colorName,
	},
	btnMapContainerCancel: {
		paddingLeft: 5,
		width: "50%",
	},
	btnMapCancel: {
		backgroundColor: color.red.red1,
	},
});
