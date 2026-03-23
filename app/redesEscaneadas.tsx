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
        <View style={styles.infoGeral}>
          <View style={styles.containerColunas}>
            <View style={styles.colunaEsquerda}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={{ width: 130, height: 110 }}
              />

              <TouchableOpacity style={styles.button} onPress={() => router.push('/redeConectada')}>
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
        <Text style={styles.Titulo}>Redes Detectadas</Text>

        <View style={styles.infoGeral}>
          <View style={styles.containerColunas}>
            <View style={styles.colunaEsquerda}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={{ width: 90, height: 70 }}
              />
            </View>

            <View style={styles.colunaDireita}>
              <Text style={styles.subTitulo}>Rede Exemplo 1</Text>
              <TouchableOpacity style={styles.button} onPress={() => router.push('/redeDetectada')}>
                <Text style={styles.textButton}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.infoGeral}>
          <View style={styles.containerColunas}>
            <View style={styles.colunaEsquerda}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={{ width: 90, height: 70 }}
              />
            </View>

            <View style={styles.colunaDireita}>
              <Text style={styles.subTitulo}>Rede Exemplo 2</Text>
              <TouchableOpacity style={styles.button} onPress={() => router.push('/redeDetectada')}>
                <Text style={styles.textButton}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>

        <View style={styles.infoGeral}>
          <View style={styles.containerColunas}>
            <View style={styles.colunaEsquerda}>
              <Image
                source={require("../assets/Wifi-Excelente-Icon.png")}
                style={{ width: 90, height: 70 }}
              />
            </View>

            <View style={styles.colunaDireita}>
              <Text style={styles.subTitulo}>Rede Exemplo 3</Text>
              <TouchableOpacity style={styles.button} onPress={() => router.push('/redeDetectada')}>
                <Text style={styles.textButton}>Ver Detalhes</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
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
});
