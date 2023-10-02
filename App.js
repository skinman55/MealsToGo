import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen.js";
import { ThemeProvider } from "styled-components/native";

import { theme } from "./src/infrastructure/theme";
///const isAndroid = Platform.OS === "android";
//console.log('StatusBar.currentHeight', );

import {
  useFonts as useOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";

import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
  });

  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
        <ExpoStatusBar style="auto" />
      </ThemeProvider>
    </>
  );
}
