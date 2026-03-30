import React from "react";
import { View, StyleSheet } from "react-native";
import ImagemDinamicaWifi from "./ImagemDinamicaWifi";
import Titulo from "./Titulo";
import SenhaContainer from "./SenhaContainer";

export default function InfoTopo({ nome, sinalFormatado }: { nome: string | string[]; sinalFormatado: string }) {
  return (
    <View style={styles.InfoTopo}>
      <ImagemDinamicaWifi nivel={sinalFormatado} />

      <Titulo texto={nome}></Titulo>

      <SenhaContainer></SenhaContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  InfoTopo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
