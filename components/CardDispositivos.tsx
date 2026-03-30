import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import TextoExtraNormal from "./TextoExtraNormal";

export default function CardInterferencias() {
  return (
    <View style={[styles.containerCardDispositivos, { marginTop: 30 }]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Titulo texto={"Dispositivos Conectados: 3"} />
      </View>

      <View style={styles.dispositivoContainer}>
        <Image
          source={require("../assets/Dispositivos-Icon.png")}
          style={{ width: 100, height: 100, marginRight: 10 }}
        />
        <TextoExtraNormal texto={"*Informações sobre o dispositivo*"} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCardDispositivos: {
    marginTop: 20,
    width: "100%",
    textAlign: "left",
  },
  containerColunas: {
    flexDirection: "row",
    marginTop: 10,
  },

  colunaEsquerda: {
    flex: 1,
    alignItems: "center",
    marginRight: 10,
  },

  colunaDireita: {
    flex: 1,
    justifyContent: "center",
  },
  dispositivoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
