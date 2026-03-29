import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

interface ButtonProps {
  title: string;
  onPress: () => void;
  width?: number;
  height?: number;
  fontSize?: number;
}

export default function Button({ title, onPress, width, height, fontSize }: ButtonProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, width !== undefined ? { width } : undefined, height !== undefined ? { height } : undefined, ]}
    >
      <Text style={[styles.textButton, fontSize !== undefined ? { fontSize } : undefined]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1F7FB6",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },
  textButton: {
    fontSize: 24,
    textAlign: "center",
    color: "#fff",
  },
});
