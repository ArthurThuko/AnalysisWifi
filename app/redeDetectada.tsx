import React from "react";
import { useLocalSearchParams } from "expo-router";
import ContainerScroll from "../components/ContainerScroll";
import InfoTopo from "../components/InfoTopo";
import InfoGeral from "../components/InfoGeral";
import CardQualidadeWifi from "../components/CardQualidadeWifi";
import CardInterferencias from "../components/CardInterferencias";
import CardDispositivos from "../components/CardDispositivos";

export default function RedeDetectada() {
    const params = useLocalSearchParams();
      const nome = params.nome;
      const sinal = params.sinal;
      const sinalFormatado = (sinal || "Ótimo") as
        | "Ótimo"
        | "Bom"
        | "Médio"
        | "Ruim";
      const canal = params.canal;
      const frequencia = params.frequencia;
      const seguranca = params.seguranca;
    
      return (
        <ContainerScroll>
          <InfoTopo nome={nome} sinalFormatado={sinalFormatado}></InfoTopo>
    
          <InfoGeral
            nome={nome}
            sinal={sinal}
            canal={canal}
            frequencia={frequencia}
            seguranca={seguranca}
          ></InfoGeral>
    
          <CardQualidadeWifi />
    
          <CardInterferencias />
    
          <CardDispositivos />
        </ContainerScroll>
  );
}