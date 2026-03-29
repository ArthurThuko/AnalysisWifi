import { useRouter } from "expo-router";
import React from "react";
import { Text, View, Image, TouchableOpacity, StyleSheet } from "react-native";
import Container from "../components/Container";
import Button from "../components/Button";

export default function Home() {
  const router = useRouter();

  return (
    <Container>
      <Image
        style={styles.logo}
        source={require("../assets/Logomarca-AnalysisWifi.png")}
      />

      <Button
        title="Escanear Redes"
        onPress={() => router.push("/redesEscaneadas")}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: 50,
    width: "100%",
    height: "12%",
  },
});
