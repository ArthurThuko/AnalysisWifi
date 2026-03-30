import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import Button from "./Button";
import SubTitulo from "./SubTitulo";
import TextoExtraNormal from "./TextoExtraNormal";

export default function CardInterferencias() {
  return (
    <View style={[styles.containerCardInterferencias, { marginTop: 30 }]}>
      <Titulo texto={"Interferências"}></Titulo>
      <View style={styles.containerColunas}>
        <View style={styles.colunaEsquerda}>
          <Image
            source={require("../assets/Interferencia-Icon.png")}
            style={{ width: 90, height: 80, marginBottom: 3 }}
          />

          <Button
            title={"Ver Interferências"}
            onPress={function (): void {
              throw new Error("Function not implemented.");
            }}
            height={50}
            width={150}
            fontSize={16}
          ></Button>
        </View>

        <View style={styles.colunaDireita}>
          <SubTitulo texto={"Baixa"}></SubTitulo>
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
  containerCardInterferencias: {
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
