import { useRouter } from "expo-router";
import React from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("../assets/Logomarca-AnalysisWifi.png")}
      />

      <TouchableOpacity onPress={() => router.push('/redesEscaneadas')} style={styles.button}>
        <Text style={styles.textButton}>Escanear Redes</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  logo: {
    marginBottom: 50,
    width: "100%",
    height: "12%",
  },
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
  }
});
