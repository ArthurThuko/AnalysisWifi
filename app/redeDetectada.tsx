import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function RedeDetectada() {
  type NivelWifi = "Excelente" | "Bom" | "Ruim" | "Pessimo";

  const imagensWifi: Record<NivelWifi, any> = {
    Excelente: require("../assets/Wifi-Excelente-Icon.png"),
    Bom: require("../assets/Wifi-Bom-Icon.png"),
    Ruim: require("../assets/Wifi-Ruim-Icon.png"),
    Pessimo: require("../assets/Wifi-Pessimo-Icon.png"),
  };

  const sinal: NivelWifi = "Excelente"; // Exemplo de valor, você pode atualizar isso com base na força do sinal real

  const [mostrarSenha, setMostrarSenha] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.InfoTopo}>
        <Image
          style={styles.wifiImagem}
          source={imagensWifi[sinal] || require("../assets/Wifi-Erro-Icon.png")}
        />

        <Text style={styles.Titulo}>Nome do Wifi</Text>
      </View>

      <View style={styles.infoGeral}>
        <Text style={styles.Titulo}>Informações Gerais</Text>
        <Text style={styles.textoNormal}>Nome da rede: FulanodeTal</Text>
        <Text style={styles.textoNormal}>Intensidade do sinal: Forte</Text>
        <Text style={styles.textoNormal}>Canal utilizado: 11</Text>
        <Text style={styles.textoNormal}>Frequência da rede: 2.4Gz</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.textoNormal}>Tipo de segurança: Insegura</Text>
          <Image
            style={{ width: 18, height: 18, marginLeft: 5 }}
            source={require("../assets/Atencao-Icon.png")}
          ></Image>
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
