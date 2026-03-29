export interface WifiNetwork {
  SSID: string;
  BSSID?: string;
  level: number;
  frequency?: number;
  capabilities?: string;
}