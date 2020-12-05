import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";

import AccountScreen from "../screen/AccountScreen";
import ListingEditScreen from "../screen/ListingEditScreen";
import ListingsScreen from "../screen/ListingsScreen";
import FeedNavigator from "./FeedNavigator";

const Tab = createBottomTabNavigator();

export default AppNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Feed" component={FeedNavigator} />
    <Tab.Screen name="ListingEdit" component={ListingEditScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
