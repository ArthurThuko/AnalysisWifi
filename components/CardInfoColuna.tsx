import React from "react";
import { StyleSheet, View, Image, ImageSourcePropType } from "react-native";
import { useRouter } from "expo-router";
import Button from "./Button";
import TextoNormal from "./TextoNormal";
import SubTitulo from "./SubTitulo";

interface Rede {
  nome: string;
  sinal: string;
  canal: string;
  frequencia: string;
  seguranca: string;
}

interface Props {
  rede: Rede;
  imagem: ImageSourcePropType;
  redeAtual?: boolean;
}

export default function CardInfoColuna({ rede, imagem, redeAtual }: Props) {
  const router = useRouter();

  return (
    <View style={styles.infoGeralColunas}>
      <View style={styles.containerColunas}>
        <View style={styles.colunaEsquerda}>
          <Image source={imagem} style={{ width: 130, height: 110 }} />

          <Button
            title="Ver Detalhes"
            onPress={() =>
              router.push({
                pathname: "/redeConectada",
                params: {
                  nome: rede.nome,
                  sinal: rede.sinal,
                  canal: rede.canal,
                  frequencia: rede.frequencia,
                  seguranca: rede.seguranca,
                },
              })
            }
            width={180}
            height={45}
            fontSize={18}
          />
        </View>

        <View style={styles.colunaDireita}>
          {redeAtual && <SubTitulo texto="Rede Atual" />}
          {!redeAtual && <SubTitulo texto="Rede Detectada" />}

          <TextoNormal
            texto={`Nome da rede: ${rede?.nome || "Carregando..."}`}
          />
          <TextoNormal texto={`Intensidade do sinal: ${rede?.sinal || "-"}`} />
          <TextoNormal texto={`Canal utilizado: ${rede?.canal || "-"}`} />
          <TextoNormal
            texto={`Frequência da rede: ${rede?.frequencia || "-"}`}
          />
          <TextoNormal texto={`Tipo de segurança: ${rede?.seguranca || "-"}`} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  infoGeralColunas: {
    marginTop: 20,
    width: "100%",
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
