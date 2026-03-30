import React from "react";
import { TouchableOpacity, View, StyleSheet, Text, Image } from "react-native";

export default function SenhaContainer() {
  const [mostrarSenha, setMostrarSenha] = React.useState(false);

  return (
    <View style={styles.senhaContainer}>
      <Text style={styles.senhaTexto}>
        {mostrarSenha ? "12345678" : "********"}
      </Text>

      <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
        <Image
          source={
            mostrarSenha
              ? require("../assets/OlhoAberto-Icon.png")
              : require("../assets/OlhoFechado-Icon.png")
          }
          style={styles.iconeOlho}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  senhaTexto: {
    fontSize: 16,
    marginRight: 10,
  },
  iconeOlho: {
    width: 60,
    height: 30,
  },
});
