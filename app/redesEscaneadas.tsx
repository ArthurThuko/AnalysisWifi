import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { escanearRedes, getRedeAtual } from "../services/wifiService";
import { getFrequencia, getCanal, getSeguranca } from "../utils/wifiUtils";

export default function RedesEscaneadas() {
  const router = useRouter();

  const carregar = async () => {
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
    carregar();
  }, []);

  const [redes, setRedes] = useState<any[]>([]);
  const [redeAtual, setRedeAtual] = useState<any>(null);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <View style={styles.infoGeral}>
          <View style={styles.containerColunas}>
            <View style={styles.colunaEsquerda}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={{ width: 130, height: 110 }}
              />

              <TouchableOpacity
                style={styles.button}
                onPress={() => router.push("/redeConectada")}
              >
                <Text style={styles.textButton}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.colunaDireita}>
              <Text style={styles.subTitulo}>Rede Conectada</Text>
              <Text style={styles.textoNormal}>
                Nome da rede: {redeAtual?.nome || "Carregando..."}
              </Text>

              <Text style={styles.textoNormal}>
                Intensidade do sinal: {redeAtual?.sinal ?? "-"}
              </Text>

              <Text style={styles.textoNormal}>
                Canal utilizado: {redeAtual?.canal ?? "-"}
              </Text>

              <Text style={styles.textoNormal}>
                Frequência da rede: {redeAtual?.frequencia ?? "-"}
              </Text>

              <Text style={styles.textoNormal}>
                Tipo de segurança: {redeAtual?.seguranca ?? "-"}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* Linha divisória */}
      <View
        style={{
          height: 3,
          backgroundColor: "#1F7FB6",
          marginHorizontal: 10,
        }}
      />

      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.Titulo}>Redes Escaneadas</Text>

        {redes.map((rede, index) => (
          <View key={index} style={styles.infoGeral}>
            <View style={styles.containerColunas}>
              <View style={styles.colunaEsquerda}>
                <Image
                  source={require("../assets/Wifi-Excelente-Icon.png")}
                  style={{ width: 90, height: 70 }}
                />
              </View>

              <View style={styles.colunaDireita}>
                <Text style={styles.subTitulo}>{rede.nome}</Text>
                <Text style={styles.textoNormal}>Sinal: {rede.sinal}</Text>
                <Text style={styles.textoNormal}>
                  Frequência: {rede.frequencia}
                </Text>
                <Text style={styles.textoNormal}>Canal: {rede.canal}</Text>
                <Text style={styles.textoNormal}>
                  Segurança: {rede.seguranca}
                </Text>

                <TouchableOpacity
                  style={styles.button}
                  onPress={() => router.push("/redeDetectada")}
                >
                  <Text style={styles.textButton}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.fab} onPress={carregar}>
        <Text style={styles.fabIcon}>⟳</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexGrow: 1,
    alignItems: "center",
  },

  header: {
    justifyContent: "center",
    alignItems: "center",
  },

  infoGeral: {
    marginTop: 20,
    width: "100%",
    textAlign: "left",
  },

  Titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },

  textoNormal: {
    fontSize: 13,
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

  subTitulo: {
    fontSize: 21,
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#1F7FB6",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "65%",
  },

  textButton: {
    fontSize: 15,
    textAlign: "center",
    color: "#fff",
  },

  fab: {
    position: "absolute",
    bottom: 20,
    right: 20,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#1F7FB6",
    justifyContent: "center",
    alignItems: "center",

    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },

  fabIcon: {
    fontSize: 28,
    color: "#fff",
  },
});
