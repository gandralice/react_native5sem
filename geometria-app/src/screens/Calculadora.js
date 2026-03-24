import React, { useState } from "react";
import { Text } from "react-native";
import * as S from "../styled-comps";
import {
  calculateSum,
  calculateSub,
  calculateDivi,
  calculateMult,
} from "../utils/calcs";
export default function Calculadora() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(0);

  function clear() {
    setNum1("");
    setNum2("");
    setResult(0);
  }
  return (
    <S.Container>
      <S.Title>Calculadora</S.Title>
      <S.InputContainer>
        <S.Input
          onChangeText={setNum1}
          value={num1}
          placeholder="Número 1"
          keyboardType="numeric"
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.Input
          onChangeText={setNum2}
          value={num2}
          placeholder="Número 2"
          keyboardType="numeric"
        />
      </S.InputContainer>
      <S.InputContainer>
        <S.OperationButton onPress={() => setResult(calculateSum(num1, num2))}>
          <Text style={{ fontSize: 20 }}>+</Text>
        </S.OperationButton>
        <S.OperationButton onPress={() => setResult(calculateSub(num1, num2))}>
          <Text style={{ fontSize: 20 }}>-</Text>
        </S.OperationButton>
        <S.OperationButton onPress={() => setResult(calculateMult(num1, num2))}>
          <Text style={{ fontSize: 20 }}>*</Text>
        </S.OperationButton>
        <S.OperationButton onPress={() => setResult(calculateDivi(num1, num2))}>
          <Text style={{ fontSize: 20 }}>/</Text>
        </S.OperationButton>
      </S.InputContainer>
      <S.Result>{result}</S.Result>

      <S.ClearButton onPress={clear}>
        <Text>Clear</Text>
      </S.ClearButton>
    </S.Container>
  );
}
