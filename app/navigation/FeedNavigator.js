import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import ListingDetailsScreen from "../screen/ListingDetailsScreen";
import ListingsScreen from "../screen/ListingsScreen";
import routes from "./routes";

const Stack = createStackNavigator();

const FeedNavigator = () => (
  <Stack.Navigator mode="card">
    <Stack.Screen //
      name={routes.LISTINGS}
      component={ListingsScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen
      name={routes.LINSTING_DETAILS}
      component={ListingDetailsScreen}
      options={{ headerBackTitle: "Feed", title: "" }}
    />
  </Stack.Navigator>
);

export default FeedNavigator;
