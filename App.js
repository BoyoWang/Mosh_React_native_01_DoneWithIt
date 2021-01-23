import React from "react";
import { Button } from "react-native";
import * as Notifications from "expo-notifications";

import Screen from "./app/components/Screen";

Notifications.setNotificationHandler({
  handleNotification: async () => {
    return {
      shouldShowAlert: true,
      shouldPlaySound: true,
      shouldSetBadge: true,
    };
  },
});

function App(props) {
  const showNotification = () => {
    Notifications.scheduleNotificationAsync({
      content: {
        title: "Test title for local",
        body: "Test body for local",
      },
      trigger: null,
    });
  };

  return (
    <Screen>
      <Button title="Tap me" onPress={showNotification} />
    </Screen>
  );
}

export default App;
