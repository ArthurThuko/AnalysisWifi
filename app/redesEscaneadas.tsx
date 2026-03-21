import React from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";

export default function RedesEscaneadas() {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}></View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.infoGeral}>
          <View style={styles.containerColunas}>
            <View style={styles.colunaEsquerda}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={{ width: 130, height: 110 }}
              />

              <TouchableOpacity style={styles.button}>
                <Text style={styles.textButton}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.colunaDireita}>
              <Text style={styles.subTitulo}>Rede Conectada</Text>
              <Text style={styles.textoNormal}>Nome da rede: FulanodeTal</Text>
              <Text style={styles.textoNormal}>
                Intensidade do sinal: Forte
              </Text>
              <Text style={styles.textoNormal}>Canal utilizado: 11</Text>
              <Text style={styles.textoNormal}>Frequência da rede: 2.4Gz</Text>
              <Text style={styles.textoNormal}>
                Tipo de segurança: Insegura
              </Text>
            </View>
          </View>
        </View>{" "}
      </ScrollView>
    </View>
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

  header: {
    height: 80,
    backgroundColor: "#0A1F44",
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
});
