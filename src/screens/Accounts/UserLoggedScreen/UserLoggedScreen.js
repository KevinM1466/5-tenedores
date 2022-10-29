/** @format */

import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { LoadingModal } from "../../../components";
import { InfoUser, AccountOptions } from "../../../components/Account";
import { styles } from "./UserLoggedScreen.styles";

export function UserLoggedScreen() {
	const [loading, setLoading] = useState(false);
	const [loadingText, setLoadingText] = useState("");
	const [_, setReloadUserInfo] = useState(false);

	const onReload = () => setReloadUserInfo((prevState) => !prevState);

	const logout = async () => {
		const auth = getAuth();
		await signOut(auth);
	};

	return (
		<View>
			<InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />

			<AccountOptions onReload={onReload} />

			<Button
				title='Cerrar sesión'
				buttonStyle={styles.btn}
				titleStyle={styles.btnTitle}
				onPress={logout}
			/>

			<LoadingModal show={loading} text={loadingText} />
		</View>
	);
}
