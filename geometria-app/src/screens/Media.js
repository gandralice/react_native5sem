import React, { useState } from "react";
import { Text } from "react-native";
import * as S from "../styled-comps";
import { calcularMedia } from "../utils/calcs";
export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");
  const [num4, setNum4] = useState("");
  const [result, setResult] = useState(0);
  const [message, setMessage] = useState("");

  const handlePress = () => {
    const res = calcularMedia(num1, num2, num3, num4);
    setResult(res.valor);
    setMessage(res.status);
  };
  return (
    <S.Container>
      <S.Title>Calculadora de Média</S.Title>
      <S.InputContainer>
        <S.Input
          onChangeText={setNum1}
          placeholder="1º numero"
          keyboardType="numeric"
        ></S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          onChangeText={setNum2}
          placeholder="2º numero"
          keyboardType="numeric"
        ></S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          onChangeText={setNum3}
          placeholder="3º numero"
          keyboardType="numeric"
        ></S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          onChangeText={setNum4}
          placeholder="4º numero"
          keyboardType="numeric"
        ></S.Input>
      </S.InputContainer>
      <S.Button style={{ marginBottom: 10 }} onPress={() => handlePress()}>
        <Text style={{ color: "#fff" }}>Calc</Text>
      </S.Button>
      <S.Result>{result}</S.Result>
      {message !== "" && <S.ResMessage score={result}>{message}</S.ResMessage>}
    </S.Container>
  );
}
