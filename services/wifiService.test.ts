/// <reference types="jest" />
import {
  escanearRedes,
  getRedeAtual,
  escanearDispositivos,
  getBaseIP,
} from "./wifiService";
import * as Network from "expo-network";

jest.mock("expo-network");

describe("wifiService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (globalThis as any).fetch = jest.fn();
    process.env.USE_MOCK = "true";
  });

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

  test("deve retornar o IP base corretamente", async () => {
    (Network.getIpAddressAsync as jest.Mock).mockResolvedValue("192.168.0.15");

    const baseIP = await getBaseIP();

    expect(baseIP).toBe("192.168.0");
  });

  test("deve lançar erro se IP for inválido", async () => {
    (Network.getIpAddressAsync as jest.Mock).mockResolvedValue(null);

    await expect(getBaseIP()).rejects.toThrow("IP inválido");
  });

  test("deve retornar lista de dispositivos ativos", async () => {
    (Network.getIpAddressAsync as jest.Mock).mockResolvedValue("192.168.0.1");

    (globalThis as any).fetch = jest.fn().mockImplementation((url: string) => {
      if (url.includes("192.168.0.2") || url.includes("192.168.0.5")) {
        return Promise.resolve({ ok: true });
      }
      return Promise.reject("erro");
    });

    const dispositivos = await escanearDispositivos();

    expect(dispositivos).toContain("192.168.0.2");
    expect(dispositivos).toContain("192.168.0.5");
  });

  test("deve retornar array vazio se IP for inválido", async () => {
    (Network.getIpAddressAsync as jest.Mock).mockResolvedValue(null);

    const dispositivos = await escanearDispositivos();

    expect(dispositivos).toEqual([]);
  });

  test("não deve quebrar com timeouts", async () => {
    (Network.getIpAddressAsync as jest.Mock).mockResolvedValue("192.168.0.1");

    (globalThis as any).fetch = jest.fn().mockImplementation(() => new Promise(() => {}));

    const dispositivos = await escanearDispositivos();

    expect(dispositivos).toEqual([]);
  });
});
