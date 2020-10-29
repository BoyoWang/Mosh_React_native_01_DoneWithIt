import React from "react";

import Screen from "./app/components/Screen";
import Icon from "./app/components/Icon";
import ListItem from "./app/components/ListItem";
import AccountScreen from "./app/screen/AccountScreen";

export default function App() {
  return (
    <Screen>
      <AccountScreen />
    </Screen>
  );
}
