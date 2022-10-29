/** @format */

import React from "react";
import { View, ScrollView } from "react-native";
import { Button, Text, Image } from "react-native-elements";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { LoginForm } from "../../../components/Auth";
import { screen } from "../../../utils";
import { styles } from "./LoginScreen.styles";

export function LoginScreen() {
	const navigation = useNavigation();

	const goToRegister = () => {
		navigation.navigate(screen.account.register);
	};
	return (
		<KeyboardAwareScrollView>
			<Image
				source={require("../../../../assets/img/5-tenedores-letras-icono-logo.png")}
				style={styles.image}
			/>
			<View style={styles.container}>
				<LoginForm />
				<Text style={styles.textRegister}>
					¿Aún no tienes una cuenta?{" "}
					<Text style={styles.btnRegister} onPress={goToRegister}>
						Registrarse
					</Text>
				</Text>
			</View>
		</KeyboardAwareScrollView>
	);
}
