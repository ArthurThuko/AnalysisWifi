import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import Button from "./Button";
import SubTitulo from "./SubTitulo";
import TextoExtraNormal from "./TextoExtraNormal";
import { getCanal } from "../utils/wifiUtils";
import { escanearRedes } from "../services/wifiService";

export default function CardInterferencias({
  canalAtual,
}: {
  canalAtual: string | string[];
}) {
  const [mostrar, setMostrar] = React.useState(false);
  const [interferencia, setInterferencia] = React.useState("");
  const [quantidade, setQuantidade] = React.useState(0);

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
            title={mostrar ? "Ocultar Interferências" : "Ver Interferências"}
            onPress={async () => {
              const novoEstado = !mostrar;
              setMostrar(novoEstado);

              if (novoEstado) {
                const redes = await escanearRedes();
                const { nivel, quantidade } = calcularInterferenciaDetalhada(redes, Number(canalAtual));
                setInterferencia(nivel);
                setQuantidade(quantidade);}
            }}
            height={50}
            width={180}
            fontSize={16}
          />
        </View>

        {mostrar && (
          <View style={styles.colunaDireita}>
            <SubTitulo texto={interferencia} />
            <TextoExtraNormal texto={`Canal atual: ${canalAtual}`} />
            <TextoExtraNormal
              texto={`Quantidade de redes no canal: ${quantidade}`}
            />
          </View>
        )}
      </View>
    </View>
  );
}

export function calcularInterferenciaDetalhada(
  redes: any[],
  canalAtual: number,
) {
  const redesNoCanal = redes.filter(
    (rede) => getCanal(rede.frequency) === canalAtual,
  );

  const quantidade = redesNoCanal.length;

  let nivel = "Baixa";
  if (quantidade > 2) nivel = "Média";
  if (quantidade > 5) nivel = "Alta";

  return { nivel, quantidade };
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
