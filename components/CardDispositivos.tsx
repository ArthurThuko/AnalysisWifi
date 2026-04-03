import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import TextoExtraNormal from "./TextoExtraNormal";
import { escanearDispositivos } from "../services/wifiService";

export default function CardInterferencias() {
  const [dispositivos, setDispositivos] = React.useState<string[]>([]);
  const [qtdDispositivos, setQtdDispositivos] = React.useState(0);

  async function carregarDispositivos() {
    const lista = await escanearDispositivos();

    setQtdDispositivos(lista.length);
    setDispositivos(lista);
  }

  useEffect(() => {
    carregarDispositivos();
  }, []);

  return (
    <View style={[styles.containerCardDispositivos, { marginTop: 30 }]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Titulo texto={"Dispositivos Conectados: " + qtdDispositivos} />
      </View>

      <View style={styles.dispositivoContainer}>
        <Image
          source={require("../assets/Dispositivos-Icon.png")}
          style={{ width: 100, height: 100, marginBottom: 10, marginRight: 20 }}
        />

        <TextoExtraNormal texto={`IPs encontrados: `} />

        {dispositivos.map((ip) => (
          <TextoExtraNormal key={ip} texto={ip} />
        ))}
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
