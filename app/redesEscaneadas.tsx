import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
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
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
          activeOpacity={0.7}
          hitSlop={{ top: 12, bottom: 12, left: 12, right: 12 }}
        >
          <Ionicons name="chevron-back" size={28} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.infoGeral}>
          <View style={styles.containerRedes}>
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
                <View style={styles.cabecalhoRedeConectada}>
                  <Text style={styles.subTitulo}>Rede Conectada</Text>
                </View>
                <Text style={styles.textoNormal}>Nome da rede: x</Text>
                <Text style={styles.textoNormal}>
                  Intensidade do sinal: x
                </Text>
                <Text style={styles.textoNormal}>Canal utilizado: x</Text>
                <Text style={styles.textoNormal}>Frequência da rede: x</Text>
                <Text style={styles.textoNormal}>
                  Tipo de segurança: x
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.infoGeral}>
          <View style={styles.containerRedes}>
            <View style={styles.cabecalhoRedeDetectadas}>
              <Text style={styles.Titulo}>Rede Detectadas</Text>
            </View>

            <View style={styles.itemRedeDetectada}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={styles.iconRedePequeno}
              />
              <View style={styles.textosItemRede}>
                <Text style={styles.textoNomes}>Nome 1</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.itemRedeDetectada}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={styles.iconRedePequeno}
              />
              <View style={styles.textosItemRede}>
                <Text style={styles.textoNomes}>Nome 2</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.itemRedeDetectada}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={styles.iconRedePequeno}
              />
              <View style={styles.textosItemRede}>
                <Text style={styles.textoNomes}>Nome 3</Text>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.textButton}>Ver Detalhes</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingTop: 16,
    paddingHorizontal: 24,
    paddingBottom: 32,
  },

  header: {
    height: 60,
    backgroundColor: "#0A1F44",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 8,
  },

  backButton: {
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
  },

  infoGeral: {
    width: "100%",
    textAlign: "left",
  },

  Titulo: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },

  textoNormal: {
    marginBottom: 5,
    fontSize: 14,
    color: "#fff",
  },

  textoNomes: {
    fontSize: 15,
    color: "#fff",
  },

  containerColunas: {
    flexDirection: "row",
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
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#fff",
  },

  button: {
    backgroundColor: "#1F7FB6",
    padding: 10,
    marginTop: 10,
    width: "65%",
  },

  textButton: {
    fontSize: 13,
    textAlign: "center",
    color: "#fff",
  },

  containerRedes: {
    width: "100%",
    backgroundColor: "#000",
    padding: 30,
  },

  cabecalhoRedeConectada: {
    width: "100%",
    alignItems: "flex-start",
    marginBottom: 8,
  },

  cabecalhoRedeDetectadas: {
    width: "100%",
    alignItems: "center",
    marginBottom: 16,
  },

  itemRedeDetectada: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 20,
  },

  iconRedePequeno: {
    width: 80,
    height: 70,
    marginRight: 12,
  },

  textosItemRede: {
    flex: 1,
    justifyContent: "center",
  },
});
