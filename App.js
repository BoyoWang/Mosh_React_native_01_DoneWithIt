import React from "react";
import { Text, View } from "react-native";
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
      <Text
        style={{
          fontFamily: "Courier",
          fontSize: 30,
          fontStyle: "italic",
          fontWeight: "600",
          color: "tomato",
          textTransform: "capitalize",
          textDecorationLine: "underline",
          textAlign: "center",
          lineHeight: 30,
        }}
      >
        I love react native, this is my first React Native App!
      </Text>
    </View>
  );
}
