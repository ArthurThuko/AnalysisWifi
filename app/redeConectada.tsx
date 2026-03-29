import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";

export default function RedeConectada() {
  type NivelWifi = "Ótimo" | "Bom" | "Ruim" | "Pessimo";

  const imagensWifi: Record<NivelWifi, any> = {
    Ótimo: require("../assets/Wifi-Otimo-Icon.png"),
    Bom: require("../assets/Wifi-Bom-Icon.png"),
    Ruim: require("../assets/Wifi-Ruim-Icon.png"),
    Pessimo: require("../assets/Wifi-Pessimo-Icon.png"),
  };

  const params = useLocalSearchParams();
  const nome = params.nome;
  const sinal = params.sinal;
  const sinalFormatado = (sinal || "Ótimo") as
    | "Ótimo"
    | "Bom"
    | "Ruim"
    | "Pessimo";
  const canal = params.canal;
  const frequencia = params.frequencia;
  const seguranca = params.seguranca;

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.InfoTopo}>
        <Image
          style={styles.wifiImagem}
          source={
            imagensWifi[sinalFormatado] ||
            require("../assets/Wifi-Erro-Icon.png")
          }
        />

        <Text style={styles.Titulo}>Nome do Wifi</Text>

        <View style={styles.senhaContainer}>
          <Text style={styles.senhaTexto}>
            {mostrarSenha ? "12345678" : "********"}
          </Text>

          <TouchableOpacity onPress={() => setMostrarSenha(!mostrarSenha)}>
            <Image
              source={
                mostrarSenha
                  ? require("../assets/OlhoAberto-Icon.png")
                  : require("../assets/OlhoFechado-Icon.png")
              }
              style={styles.iconeOlho}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.infoGeral}>
        <Text style={styles.Titulo}>Informações Gerais</Text>
        <Text style={styles.textoNormal}>Nome da rede: {nome}</Text>
        <Text style={styles.textoNormal}>Intensidade do sinal: {sinal}</Text>
        <Text style={styles.textoNormal}>Canal utilizado: {canal}</Text>
        <Text style={styles.textoNormal}>Frequência da rede: {frequencia}</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          {seguranca === "Aberta" && (
            <Image
              style={{ width: 18, height: 18, marginLeft: 5 }}
              source={require("../assets/Atencao-Icon.png")}
            />
          )}
        </View>
      </View>

      <View style={styles.infoGeral}>
        <Text style={styles.Titulo}>Qualidade do Wifi</Text>

        <View style={styles.containerColunas}>
          <View style={styles.colunaEsquerda}>
            <Image
              source={require("../assets/Medidor-Icon.png")}
              style={{ width: 150, height: 90, marginBottom: 3 }}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Ver Qualidade</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.colunaDireita}>
            <Text style={styles.subTitulo}>Baixa</Text>
            <Text style={styles.textoNormal}>
              Sua conexão está estável no momento, com boa velocidade para
              navegação.
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.infoGeral, { marginTop: 30 }]}>
        <Text style={styles.Titulo}>Interferências</Text>

        <View style={styles.containerColunas}>
          <View style={styles.colunaEsquerda}>
            <Image
              source={require("../assets/Interferencia-Icon.png")}
              style={{ width: 90, height: 100, marginBottom: 3 }}
            />

            <TouchableOpacity style={styles.button}>
              <Text style={styles.textButton}>Ver Interferências</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.colunaDireita}>
            <Text style={styles.subTitulo}>Baixa</Text>
            <Text style={styles.textoNormal}>
              Sua conexão está estável no momento, com boa velocidade para
              navegação.
            </Text>
          </View>
        </View>
      </View>

      <View style={[styles.infoGeral, { marginTop: 30 }]}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.Titulo}>Dispositivos Conectados: </Text>
          <Text style={[styles.Titulo, { color: "#1F7FB6" }]}>3</Text>
        </View>

        <View style={styles.dispositivoContainer}>
          <Image
            source={require("../assets/Dispositivos-Icon.png")}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <Text style={styles.textoNormal}>
            *Informações sobre o dispositivo*
          </Text>
        </View>

        <View style={styles.dispositivoContainer}>
          <Image
            source={require("../assets/Dispositivos-Icon.png")}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <Text style={styles.textoNormal}>
            *Informações sobre o dispositivo*
          </Text>
        </View>

        <View style={styles.dispositivoContainer}>
          <Image
            source={require("../assets/Dispositivos-Icon.png")}
            style={{ width: 100, height: 100, marginRight: 10 }}
          />
          <Text style={styles.textoNormal}>
            *Informações sobre o dispositivo*
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  InfoTopo: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  Titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  senhaContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  senhaTexto: {
    fontSize: 16,
    marginRight: 10,
  },
  iconeOlho: {
    width: 60,
    height: 30,
  },
  wifiImagem: {
    marginBottom: 50,
    width: 250,
    height: 200,
  },
  infoGeral: {
    marginTop: 20,
    width: "100%",
    textAlign: "left",
  },
  textoNormal: {
    fontSize: 16,
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
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 5,
  },

  button: {
    backgroundColor: "#1F7FB6",
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
    width: "100%",
  },

  textButton: {
    fontSize: 20,
    textAlign: "center",
    color: "#fff",
  },
  dispositivoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});
