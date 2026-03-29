import { WifiNetwork } from "../types/WifiNetwork";

export const wifiMock: WifiNetwork[] = [
  {
    SSID: "Casa Arthur",
    level: -35,
    frequency: 2412,
    capabilities: "[WPA2-PSK-CCMP][ESS]",
  },
  {
    SSID: "WiFi Loja",
    level: -65,
    frequency: 2437,
    capabilities: "[WPA-PSK-CCMP][ESS]",
  },
  {
    SSID: "Rede Pública",
    level: -90,
    frequency: 2462,
    capabilities: "[ESS]",
  },
  {
    SSID: "Escola X",
    level: -40,
    frequency: 5180,
    capabilities: "[ESS]",
  },
];