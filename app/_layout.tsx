import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Stack } from "expo-router";
import React from "react";

export default function RootLayout() {
  return (
    <ThemeProvider value={DefaultTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="redesEscaneadas" options={{ headerShown: false }} />
        <Stack.Screen
          name="redeConectada"
          options={{ headerShown: true, title: "" }}
        />
        <Stack.Screen
          name="redeDetectada"
          options={{ headerShown: true, title: "" }}
        />
      </Stack>
    </ThemeProvider>
  );
}
