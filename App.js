import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen.js";
///const isAndroid = Platform.OS === "android";

// const [searchQuery, setSearchQuery] = React.useState("");
// const onChangeSearch = (query) => setSearchQuery(query);

//console.log('StatusBar.currentHeight', );
export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
