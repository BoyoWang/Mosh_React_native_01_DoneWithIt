import React from "react";
import { View } from "react-native";
import WelcomeScreen from "./app/screen/WelcomeScreen";
import ViewImageScreen from "./app/screen/ViewImageScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          height: 100,
          width: 100,
          backgroundColor: "dodgerblue",
          borderColor: "royalblue",
          borderWidth: 10,
          borderRadius: 50,
        }}
      />
    </View>
  );
}
