import WifiManager from "react-native-wifi-reborn";
import { wifiMock } from "../mocks/wifiMock";
import { WifiNetwork } from "../types/WifiNetwork";

const USE_MOCK = true;

export async function escanearRedes(): Promise<WifiNetwork[]> {
  try {
    if (USE_MOCK) {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // simula delay
      return wifiMock;
    }

    const redes = await WifiManager.reScanAndLoadWifiList();

    return typeof redes === "string" ? JSON.parse(redes) : redes;
  } catch (error) {
    console.log("Erro ao escanear redes:", error);
    return [];
  }
}

export async function getRedeAtual(): Promise<string | null> {
  try {
    if (USE_MOCK) {
      return "Casa Arthur";
    }

    const ssid = await WifiManager.getCurrentWifiSSID();
    return ssid;
  } catch (error) {
    console.log("Erro ao pegar rede atual:", error);
    return null;
  }
}