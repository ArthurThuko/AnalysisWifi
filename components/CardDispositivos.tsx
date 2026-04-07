import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import Titulo from "./Titulo";
import TextoExtraNormal from "./TextoExtraNormal";
import { escanearDispositivos } from "../services/wifiService";
import Loading from "./Loading";

export default function CardInterferencias() {
  const [dispositivos, setDispositivos] = React.useState<string[]>([]);
  const [qtdDispositivos, setQtdDispositivos] = React.useState(0);
  const [loading, setLoading] = React.useState(true);

  async function carregarDispositivos() {
    const lista = await escanearDispositivos();

    setQtdDispositivos(lista.length);
    setDispositivos(lista);
  }

  useEffect(() => {
    carregarDispositivos();
  }, []);

    useEffect(() => {
      async function carregarDados() {
        try {
          await carregarDispositivos();
        } catch (erro) {
          console.log(erro);
        } finally {
          setLoading(false);
        }
      }
  
      carregarDados();
    }, []);
  
    if (loading) {
      return <Loading />;
    }

  return (
    <View style={[styles.containerCardDispositivos, { marginTop: 30 }]}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Titulo texto={"Dispositivos Conectados: " + qtdDispositivos} />
      </View>

      <View style={{ marginTop: 10 }} />
      {dispositivos.map((ip) => (
        <View key={ip} style={styles.itemDispositivo}>
          <Image
            source={require("../assets/Dispositivos-Icon.png")}
            style={styles.icone}
          />
          <TextoExtraNormal texto={ip} />
        </View>
      ))}
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

  itemDispositivo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },

  icone: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
});
