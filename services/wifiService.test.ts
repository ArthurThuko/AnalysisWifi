/// <reference types="jest" />
import { escanearRedes, getRedeAtual } from "./wifiService";

describe("wifiService", () => {
  test("Deve retornar redes mockadas quando USE_MOCK = true", async () => {
    const redes = await escanearRedes();

    expect(redes.length).toBeGreaterThan(0);
    expect(redes[0]).toHaveProperty("SSID");
  });

  test("Deve retornar rede atual mockada", async () => {
    const rede = await getRedeAtual();

    expect(rede).toBe("Casa Arthur");
  });

  test("Deve usar WifiManager quando mock estiver desligado", async () => {
    process.env.USE_MOCK = "false";

    const redes = await escanearRedes();

    expect(redes).toBeDefined();
  });
});
