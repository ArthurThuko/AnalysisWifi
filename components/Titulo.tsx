import React from "react";
import { StyleSheet, Text } from "react-native";

export default function Titulo({ texto }: { texto: string }) {
  return <Text style={styles.titulo}>{texto}</Text>;
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
