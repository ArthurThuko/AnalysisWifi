import React from "react";
import { StyleSheet, Text } from "react-native";

export default function TextoNormal({ texto }: { texto: string | string[] }) {
  return <Text style={styles.textoNormal}>{texto}</Text>;
}

const styles = StyleSheet.create({
  textoNormal: {
    fontSize: 16,
  },
});
