import WifiManager from "react-native-wifi-reborn";

export async function escanearRedes() {
  try {
    const redes = await WifiManager.reScanAndLoadWifiList();
    return redes;
  } catch (error) {
    console.log("Erro ao escanear redes:", error);
    return [];
  }
}

export async function getRedeAtual() {
  try {
    const ssid = await WifiManager.getCurrentWifiSSID();
    return ssid;
  } catch (error) {
    console.log("Erro ao pegar rede atual:", error);
    return null;
  }
}