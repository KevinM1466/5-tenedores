/** @format */

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import { RestaurantStack } from "./RestaurantStack";
import { FavoriteStack } from "./FavoriteStack";
import { RankingStack } from "./RankingStack";
import { SearchStack } from "./SearchStack";
import { AccountStack } from "./AccountStack";
import { screen, color } from "../utils";

const Tab = createBottomTabNavigator();

export function AppNavigation() {
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarActiveTintColor: color.green.colorName,
				tabBarInactiveTintColor: color.gray.colorName,
				tabBarIcon: ({ color, size }) => screenOptions(route, color, size),
			})}>
			<Tab.Screen
				name={screen.restaurant.tab}
				component={RestaurantStack}
				options={{ title: "Restaurantes" }}
			/>
			<Tab.Screen
				name={screen.favorites.tab}
				component={FavoriteStack}
				options={{ title: "Favoritos" }}
			/>
			<Tab.Screen
				name={screen.ranking.tab}
				component={RankingStack}
				options={{ title: "Ranking" }}
			/>
			<Tab.Screen
				name={screen.search.tab}
				component={SearchStack}
				options={{ title: "Buscar" }}
			/>
			<Tab.Screen
				name={screen.account.tab}
				component={AccountStack}
				options={{ title: "Cuenta" }}
			/>
		</Tab.Navigator>
	);
}

function screenOptions(route, color, size) {
	let iconName;

	if (route.name === screen.restaurant.tab) {
		iconName = "utensils";
	} else if (route.name === screen.favorites.tab) {
		iconName = "heart";
	} else if (route.name === screen.ranking.tab) {
		iconName = "star";
	} else if (route.name === screen.search.tab) {
		iconName = "search-location";
	} else if (route.name === screen.account.tab) {
		iconName = "user";
	}

	return (
		<Icon type='font-awesome-5' name={iconName} color={color} size={size} />
	);
}
