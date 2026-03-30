import WifiManager from "react-native-wifi-reborn";
import { wifiMock } from "../mocks/wifiMock";
import { WifiNetwork } from "../types/WifiNetwork";

export async function escanearRedes(): Promise<WifiNetwork[]> {
  const USE_MOCK = process.env.USE_MOCK === "true";

  try {
    if (USE_MOCK) {
      if (USE_MOCK && process.env.NODE_ENV !== "test") {
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
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
  const USE_MOCK = process.env.USE_MOCK === "true";
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
