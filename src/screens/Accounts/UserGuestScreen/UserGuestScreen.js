/** @format */

import React from "react";
import { ScrollView } from "react-native";
import { Button, Text, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
	const navigation = useNavigation();
	const goToLogin = () => {
		navigation.navigate(screen.account.login);
	};
	return (
		<ScrollView centerContent={true} style={styles.content}>
			<Image
				source={require("../../../../assets/img/user-guest.png")}
				style={styles.image}
			/>
			<Text style={styles.title}>Consulta tu perfil de Villanueva Express</Text>
			<Text style={styles.description}>
				¿Cómo describirías tu mejor restaurante? Busca y visualiza los mejores
				restaurantes de una forma sencilla, vota cuál te ha gustado más y
				comparte tu experiencia con tus amigos.
			</Text>

			<Button
				title='Ver tu perfil'
				buttonStyle={styles.btnStyle}
				onPress={goToLogin}
			/>
		</ScrollView>
	);
}
