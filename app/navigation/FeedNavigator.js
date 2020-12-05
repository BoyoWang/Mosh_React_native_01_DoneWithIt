import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import ListingsScreen from "../screen/ListingsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Listings" component={ListingsScreen} />
    <Stack.Screen
      name="ListingDetail"
      component={ListingDetailsScreen}
      options={{ headerShown: false }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
