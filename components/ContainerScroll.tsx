import React from "react";
import { ScrollView, StyleSheet } from "react-native";

export default function ContainerScroll({ children }: { children: React.ReactNode }) {
  return <ScrollView contentContainerStyle={styles.container}>{children}</ScrollView>;
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexGrow: 1,
    alignItems: "center",
  },
});
