import React from "react";
import { StyleSheet, Text } from "react-native";

export default function SubTitulo({ texto }: { texto: string }) {
  return <Text style={styles.subTitulo}>{texto}</Text>;
}

const styles = StyleSheet.create({
  subTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
