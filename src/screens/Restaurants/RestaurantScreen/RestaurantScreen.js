/** @format */

import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Icon, Text } from "react-native-elements";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { LoadingModal } from "../../../components/Shared";
import { ListRestaurant } from "../../../components/Restaurants";
import { color, screen, db } from "../../../utils";
import { styles } from "./RestaurantScreen.styles";

export function RestaurantScreen(props) {
	const { navigation } = props;
	const [currentUser, setCurrentUser] = useState(null);
	const [restaurants, setRestaurants] = useState(null);

	useEffect(() => {
		const auth = getAuth();
		onAuthStateChanged(auth, (user) => {
			setCurrentUser(user);
		});
	}, []);

	useEffect(() => {
		const q = query(
			collection(db, "restaurants"),
			orderBy("createdAt", "desc")
		);

		onSnapshot(q, (querySnapshot) => {
			setRestaurants(querySnapshot.docs);
		});
	}, []);

	const goToAddRestaurant = () => {
		// navigation.navigate(screen.restaurant.addRestaurant); Este es para viajar en una screen en el mismo stack
		// navigation.navigate(screen.account.tab), { screen: screen.account.account }; // Este es para viajar a una screen en otro stack
		navigation.navigate(screen.restaurant.tab, {
			screen: screen.restaurant.addRestaurant,
		});
	};
	return (
		<View style={styles.content}>
			{!restaurants ? (
				<LoadingModal show text='Cargando' />
			) : (
				<ListRestaurant restaurants={restaurants} />
			)}
			{currentUser && (
				<Icon
					reverse
					type='font-awesome'
					name='plus'
					color={color.green.colorName}
					containerStyle={styles.icon}
					onPress={goToAddRestaurant}
				/>
			)}
		</View>
	);
}
