import React from "react";
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  // componentDidMount
  const unsubscribe = NetInfo.addEventListener((netInfo) =>
    console.log(netInfo)
  );

  // componentWillMount
  unsubscribe();

  return null;
}
