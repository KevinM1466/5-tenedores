/** @format */

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RestaurantScreen } from "../screens/Restaurants/RestaurantScreen";
import { AddRestaurantScreen } from "../screens/Restaurants/AddRestaurantScreen";
import { Restaurant } from "../screens/Restaurants/Restaurant/Restaurant";
import { screen } from "../utils";

const Stack = createNativeStackNavigator();

export function RestaurantStack() {
	return (
		<Stack.Navigator>
			<Stack.Screen
				name={screen.restaurant.restaurant}
				component={RestaurantScreen}
				options={{ title: "Restaurantes" }}
			/>
			<Stack.Screen
				name={screen.restaurant.addRestaurant}
				component={AddRestaurantScreen}
				options={{ title: "Nuevo Restaurante" }}
			/>
			<Stack.Screen
				name={screen.restaurant.restaurantOne}
				component={Restaurant}
				options={{ title: "Restaurante" }}
			/>
		</Stack.Navigator>
	);
}
