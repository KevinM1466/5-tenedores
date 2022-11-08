/** @format */

import React, { useState, useEffect } from "react";
import { ScrollView, Dimensions } from "react-native";
import {
	doc,
	onSnapshot,
	collection,
	query,
	where,
	orderBy,
} from "firebase/firestore";
import { Carousel, Loading } from "../../../components/Shared";
import { Header } from "../../../components/Restaurant";
import { db } from "../../../utils";
import { styles } from "./Restaurant.styles";

const { width } = Dimensions.get("window");

export function Restaurant(props) {
	const { route } = props;
	const [restaurant, setRestaurant] = useState(null);

	useEffect(() => {
		setRestaurant(null);
		onSnapshot(doc(db, "restaurants", route.params.id), (doc) => {
			setRestaurant(doc.data());
		});
	}, [route.params.id]);

	if (!restaurant) return <Loading show text='Cargando' />;

	return (
		<ScrollView style={styles.content}>
			<Carousel arrayImages={restaurant.images} height={250} width={width} />

			<Header restaurant={restaurant} />
		</ScrollView>
	);
}
