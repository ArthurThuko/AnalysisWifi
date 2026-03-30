import React from "react";
import { Image } from "react-native";

export default function ImagemDinamicaWifi({ nivel }: { nivel: string }) {
  const imagensWifi: Record<string, any> = {
    Ótimo: require("../assets/Wifi-Otimo-Icon.png"),
    Bom: require("../assets/Wifi-Bom-Icon.png"),
    Médio: require("../assets/Wifi-Medio-Icon.png"),
    Ruim: require("../assets/Wifi-Ruim-Icon.png"),
  };

    return (
        <Image
          source={imagensWifi[nivel] || require("../assets/Wifi-Erro-Icon.png")}
          style={{ width: 250, height: 200 }}
        />
    );
}