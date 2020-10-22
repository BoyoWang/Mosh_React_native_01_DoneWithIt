import React from "react";
import { Text, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";
import AppText from "./app/components/AppText/";
import AppButton from "./app/components/AppButton";

export default function App() {
  return <WelcomeScreen />;
}
