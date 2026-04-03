import WifiManager from "react-native-wifi-reborn";
import * as Network from "expo-network";
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

export async function getBaseIP() {
  const ip = await Network.getIpAddressAsync();

  console.log("IP do dispositivo:", ip);

  if (!ip || !ip.includes(".")) {
    throw new Error("IP inválido: " + ip);
  }

  return ip.substring(0, ip.lastIndexOf("."));
}

export async function escanearDispositivos() {
  try {
    const ip = await Network.getIpAddressAsync();

    if (!ip || !ip.includes(".")) {
      throw new Error("IP inválido");
    }

    const baseIP = ip.substring(0, ip.lastIndexOf("."));

    const dispositivos: string[] = [];
    const requests = [];

    for (let i = 1; i < 255; i++) {
      const host = `${baseIP}.${i}`;

      const req = Promise.race([
        fetch(`http://${host}`, { method: "HEAD" }),
        new Promise((_, reject) =>
          setTimeout(() => reject("timeout"), 300)
        ),
      ])
        .then(() => dispositivos.push(host))
        .catch(() => {});

      requests.push(req);

      if (requests.length >= 20) {
        await Promise.all(requests);
        requests.length = 0;
      }
    }

    await Promise.all(requests);

    return dispositivos;
  } catch (error) {
    console.log("ERRO NO SCANNER:", error);
    return [];
  }
}