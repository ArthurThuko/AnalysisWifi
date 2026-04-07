import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import TextoExtraNormal from "./TextoExtraNormal";

export default function InfoGeral({
  nome,
  sinal,
  canal,
  frequencia,
  seguranca,
}: {
  nome: string | string[];
  sinal: string | string[];
  canal: string | string[];
  frequencia: string | string[];
  seguranca: string | string[];
}) {
  return (
    <View style={styles.infoGeral}>
      <Titulo texto={"Informações Gerais"}></Titulo>
      <TextoExtraNormal texto={"Nome da rede: " + nome}></TextoExtraNormal>
      <TextoExtraNormal texto={"Intensidade do sinal: " + sinal}></TextoExtraNormal>
      <TextoExtraNormal texto={"Canal utilizado: " + canal}></TextoExtraNormal>
      <TextoExtraNormal texto={"Frequência da rede: " + frequencia}></TextoExtraNormal>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TextoExtraNormal texto={"Segurança da rede: " + seguranca}></TextoExtraNormal>
        {seguranca === "Aberta" && (
          <Image
            style={{ width: 18, height: 18, marginLeft: 7 }}
            source={require("../assets/Atencao-Icon.png")}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoGeral: {
    marginTop: 20,
    width: "100%",
    textAlign: "left",
  },
});
