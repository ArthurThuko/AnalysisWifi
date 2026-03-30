/// <reference types="jest" />
import {
  getFrequencia,
  getCanal,
  getQualidadeSinal,
  getSeguranca,
} from "./wifiUtils";

describe("Testes para as funções de utilitários de Wi-Fi", () => {
  test("Deve retornar a frequência correta", () => {
    expect(getFrequencia(2412)).toBe("2.4 GHz");
    expect(getFrequencia(5180)).toBe("5 GHz");
  });

  test("Deve retornar o canal correto", () => {
    expect(getCanal(2412)).toBe(1);
    expect(getCanal(2417)).toBe(2);
    expect(getCanal(5180)).toBe(36);
    expect(getCanal(5200)).toBe(40);
  });

  test("Deve tratar canal inválido", () => {
    expect(getCanal(0)).toBe("Canal Desconhecido");
    expect(getCanal(1000)).toBe("Canal Desconhecido");
    expect(getCanal(10000)).toBe("Canal Desconhecido");
  });

  test("Deve retornar a qualidade do sinal correta", () => {
    expect(getQualidadeSinal(-40)).toBe("Ótimo");
    expect(getQualidadeSinal(-60)).toBe("Bom");
    expect(getQualidadeSinal(-80)).toBe("Médio");
    expect(getQualidadeSinal(-100)).toBe("Ruim");
  });

  test("Limite da qualidade de sinal", () => {
    expect(getQualidadeSinal(-49)).toBe("Ótimo");
    expect(getQualidadeSinal(-50)).toBe("Ótimo");
    expect(getQualidadeSinal(-51)).toBe("Bom");
    expect(getQualidadeSinal(-69)).toBe("Bom");
    expect(getQualidadeSinal(-70)).toBe("Bom");
    expect(getQualidadeSinal(-71)).toBe("Médio");
    expect(getQualidadeSinal(-79)).toBe("Médio");
    expect(getQualidadeSinal(-80)).toBe("Médio");
    expect(getQualidadeSinal(-81)).toBe("Ruim");
  });

  test("Deve retornar a segurança correta", () => {
    expect(getSeguranca("WPA3")).toBe("WPA3");
    expect(getSeguranca("WPA2")).toBe("WPA2");
    expect(getSeguranca("WPA")).toBe("WPA");
    expect(getSeguranca("WEP")).toBe("WEP");
    expect(getSeguranca("OPEN")).toBe("Aberta");
  });

  test("Deve tratar segurança desconhecida", () => {
    expect(getSeguranca("UNKNOWN")).toBe("Desconhecida");
  });
});
