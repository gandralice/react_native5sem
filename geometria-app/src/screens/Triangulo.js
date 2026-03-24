import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import * as S from "../styled-comps";
import { calcularAreaTriangulo, identificarTriangulo } from "../utils/calcs";
export default function Triangulo() {
  const [base, setBase] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState(null);
  const [l1, setL1] = useState("");
  const [l2, setL2] = useState("");
  const [l3, setL3] = useState("");
  const [tipo, setTipo] = useState("");

  const handleCalcular = () => {
    const area = calcularAreaTriangulo(base, altura);
    setResultado(area);
  };

  const handleProcessar = () => {
    const resTipo = identificarTriangulo(l1, l2, l3);
    setTipo(resTipo);
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <S.Container>
        <S.Title>Calculadora de Área de Triângulo</S.Title>
        <S.InputContainer>
          <S.Input
            placeholder="Base do triângulo"
            keyboardType="numeric"
            value={base}
            onChangeText={setBase}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            placeholder="Altura do triângulo"
            keyboardType="numeric"
            value={altura}
            onChangeText={setAltura}
          />
        </S.InputContainer>

        <S.Button onPress={() => handleCalcular()}>
          <Text style={{ color: "#fff" }}>Calcular Área</Text>
        </S.Button>
        {resultado !== null && <S.Result>Área: {resultado} cm²</S.Result>}

        <S.Title>Análise de Triângulo</S.Title>

        <S.InputContainer>
          <S.Input
            placeholder="Lado 1 (Base)"
            keyboardType="numeric"
            value={l1}
            onChangeText={setL1}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            placeholder="Lado 2 (Altura)"
            keyboardType="numeric"
            value={l2}
            onChangeText={setL2}
          />
        </S.InputContainer>

        <S.InputContainer>
          <S.Input
            placeholder="Lado 3"
            keyboardType="numeric"
            value={l3}
            onChangeText={setL3}
          />
        </S.InputContainer>

        <S.Button onPress={() => handleProcessar()}>
          <Text style={{ color: "#fff" }}>Analisar Triângulo</Text>
        </S.Button>

        <S.Result>Tipo: {tipo}</S.Result>
      </S.Container>
    </ScrollView>
  );
}
