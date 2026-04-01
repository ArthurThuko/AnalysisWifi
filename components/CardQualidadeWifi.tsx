import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import Button from "./Button";
import SubTitulo from "./SubTitulo";
import TextoExtraNormal from "./TextoExtraNormal";

export default function CardQualidadeWifi({
  sinalFormatado,
}: {
  sinalFormatado: string;
}) {
  const [mostrarDetalhes, setMostrarDetalhes] = React.useState(false);

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
            title={mostrarDetalhes ? "Ocultar Qualidade" : "Ver Qualidade"}
            onPress={() => setMostrarDetalhes(!mostrarDetalhes)}
            height={50}
            width={150}
            fontSize={20}
          ></Button>
        </View>

        {mostrarDetalhes && (
          <View style={styles.colunaDireita}>
            <SubTitulo texto={sinalFormatado} />
            <TextoExtraNormal
              texto={
                getDescricaoQualidade(sinalFormatado)
              }
            />
          </View>
        )}
      </View>
    </View>
  );
}

export function getDescricaoQualidade(sinalFormatado: string): string {
  if (sinalFormatado === "Ótimo")
    return "Conexão extremamente rápida e estável, ideal para qualquer atividade.";

  if (sinalFormatado === "Bom")
    return "Boa conexão, adequada para vídeos e navegação sem problemas.";

  if (sinalFormatado === "Médio")
    return "Conexão razoável, pode apresentar lentidão em alguns momentos.";

  if (sinalFormatado === "Ruim")
    return "Conexão fraca, possível instabilidade e lentidão.";

  return "Erro: Qualidade não pode ser determinada.";
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
