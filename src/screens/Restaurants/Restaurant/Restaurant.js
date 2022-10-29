/** @format */

import React, { useState, useEffect } from "react";
import { ScrollView } from "react-native";
import {
	doc,
	onSnapshot,
	collection,
	query,
	where,
	orderBy,
} from "firebase/firestore";
import { Carousel } from "../../../components/Shared";
import { db } from "../../../utils";
import { styles } from "./Restaurant.styles";

export function Restaurant(props) {
	const { route } = props;
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		setRestaurant(null);
		onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
			setRestaurant(doc.data());
		});
	}, [route.params.id]);

	if (!restaurant) return null;

	return (
		<ScrollView style={styles.content}>
			<Carousel arrayImages={restaurant.images} height={250} width={300} />
		</ScrollView>
	);
}
