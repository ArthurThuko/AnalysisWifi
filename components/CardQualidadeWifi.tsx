import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import Button from "./Button";
import SubTitulo from "./SubTitulo";
import TextoExtraNormal from "./TextoExtraNormal";

export default function CardQualidadeWifi() {
  return (
    <View style={styles.containerCardQualidade}>
      <Titulo texto={"Qualidade do Wifi"}></Titulo>
      <View style={styles.containerColunas}>
        <View style={styles.colunaEsquerda}>
          <Image
            source={require("../assets/Medidor-Icon.png")}
            style={{ width: 150, height: 90, marginBottom: 3 }}
          />

          <Button
            title={"Ver Qualidade"}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }} 
            height={50}
            width={150}
            fontSize={20}
          ></Button>
        </View>

        <View style={styles.colunaDireita}>
          <SubTitulo texto={"Baixa"} />
          <TextoExtraNormal
            texto={
              "Sua conexão está estável no momento, com boa velocidade para navegação."
            }
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerCardQualidade: {
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
});
