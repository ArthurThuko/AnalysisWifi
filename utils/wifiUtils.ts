export function getFrequencia(freq: number) {
  return freq < 3000 ? "2.4 GHz" : "5 GHz";
}

export function getCanal(freq: number) {
  if (freq >= 2412 && freq <= 2484) {
    return Math.floor((freq - 2407) / 5);
  }

  if (freq >= 5000 && freq <= 5900) {
    return Math.floor((freq - 5000) / 5);
  }

  return "Canal Desconhecido";
}

export function getSeguranca(cap: string) {
  if (cap.includes("UNKNOWN")) return "Desconhecida";
  if (cap.includes("WPA3")) return "WPA3";
  if (cap.includes("WPA2")) return "WPA2";
  if (cap.includes("WPA")) return "WPA";
  if (cap.includes("WEP")) return "WEP";
  return "Aberta";
}

export function getQualidadeSinal(level: number) {
  if (level >= -50) return "Ótimo";
  if (level >= -70) return "Bom";
  if (level >= -80) return "Médio";
  return "Ruim";
}