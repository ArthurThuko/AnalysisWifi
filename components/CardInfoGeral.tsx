import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Titulo from "./Titulo";
import TextoNormal from "./TextoNormal";

interface Rede {
  nome: string;
  sinal: string;
  canal: string;
  frequencia: string;
  seguranca: string;
}

interface Props {
  rede: Rede;
}

export default function CardInfoGeral({ rede }: Props) {
  return (
    <View style={styles.infoGeral}>
      <Titulo texto="Informações Gerais" />

      <TextoNormal texto="Nome da rede: {rede.nome}" />

      <TextoNormal texto="Intensidade do sinal: {rede.sinal}" />

      <TextoNormal texto="Canal utilizado: {rede.canal}" />
      
      <TextoNormal texto="Frequência da rede: {rede.frequencia}" />

      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextoNormal texto="Tipo de segurança: {rede.seguranca}" />

        {rede.seguranca === "Aberta" && (
          <Image
            style={{ width: 18, height: 18, marginLeft: 5 }}
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
  },
});