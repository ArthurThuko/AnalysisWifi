import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";

import { escanearRedes, getRedeAtual } from "../services/wifiService";
import { getFrequencia, getCanal, getSeguranca } from "../utils/wifiUtils";

import CardInfoColuna from "../components/CardInfoColuna";
import LinhaDivisoria from "../components/LinhaDivisoria";
import ContainerScroll from "../components/ContainerScroll";
import Titulo from "../components/Titulo";
import ButtonReload from "../components/ButtonReload";

export default function RedesEscaneadas() {
  const carregarRedes = async () => {
    const lista = await escanearRedes();
    const tratadas = lista.map((r: any) => ({
      nome: r.SSID,
      sinal: r.level,
      frequencia: getFrequencia(r.frequency),
      canal: getCanal(r.frequency),
      seguranca: getSeguranca(r.capabilities),
    }));
    setRedes(tratadas);

    const ssidAtual = await getRedeAtual();
    const redeEncontrada = tratadas.find((r) => r.nome === ssidAtual);
    setRedeAtual(redeEncontrada);
  };

  useEffect(() => {
    carregarRedes();
  }, []);

  const [redes, setRedes] = useState<any[]>([]);
  const [redeAtual, setRedeAtual] = useState<any>(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <CardInfoColuna
          rede={redeAtual}
          imagem={require("../assets/Wifi-Excelente-Icon.png")}
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
                  imagem={require("../assets/Wifi-Excelente-Icon.png")}
                  redeAtual={false}
                />
              </View>
            ),
        )}
      </ContainerScroll>

      <ButtonReload onPress={carregarRedes}></ButtonReload>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
});
