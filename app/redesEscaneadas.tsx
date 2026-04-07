import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { escanearRedes, getRedeAtual } from "../services/wifiService";
import {
  getFrequencia,
  getCanal,
  getSeguranca,
  getQualidadeSinal,
} from "../utils/wifiUtils";

import CardInfoColuna from "../components/CardInfoColuna";
import LinhaDivisoria from "../components/LinhaDivisoria";
import ContainerScroll from "../components/ContainerScroll";
import Titulo from "../components/Titulo";
import ButtonReload from "../components/ButtonReload";
import Loading from "../components/Loading";

export default function RedesEscaneadas() {
  const [loading, setLoading] = useState(true);
  const [redes, setRedes] = useState<any[]>([]);
  const [redeAtual, setRedeAtual] = useState<any>(null);

  const carregarRedes = async () => {
    try {
      const lista = await escanearRedes();

      const tratadas = lista.map((r: any) => ({
        nome: r.SSID,
        sinal: getQualidadeSinal(r.level),
        frequencia: getFrequencia(r.frequency),
        canal: getCanal(r.frequency),
        seguranca: getSeguranca(r.capabilities),
      }));

      setRedes(tratadas);

      const ssidAtual = await getRedeAtual();
      const redeEncontrada = tratadas.find((r) => r.nome === ssidAtual);
      setRedeAtual(redeEncontrada);
    } catch (error) {
      console.log("Erro ao carregar redes:", error);
    }
  };

  useEffect(() => {
    async function carregarDados() {
      try {
        await carregarRedes();
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

  const router = useRouter();

  const reloadTela = () => {
    router.replace("/redesEscaneadas");
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <CardInfoColuna
          rede={redeAtual}
          imagem={require("../assets/Wifi-Otimo-Icon.png")}
          redeAtual={true}
        />
      </View>

      <LinhaDivisoria></LinhaDivisoria>

      <ContainerScroll>
        <Titulo texto="Redes Escaneadas"></Titulo>

        {redes.map(
          (rede, index) =>
            rede.nome !== redeAtual?.nome && (
              <View key={index}>
                <CardInfoColuna
                  rede={rede}
                  imagem={require("../assets/Wifi-Otimo-Icon.png")}
                  redeAtual={false}
                />
              </View>
            ),
        )}
      </ContainerScroll>

      <ButtonReload onPress={reloadTela}></ButtonReload>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
});
