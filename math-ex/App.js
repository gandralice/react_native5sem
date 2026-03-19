import React, { useState } from "react";
import { Text, ScrollView } from "react-native";
import * as S from "./src/screens/Home/styles";
import {
  calculateSum,
  calculateSub,
  calculateMult,
  calculateDivi,
} from "./src/services/calculator";

export default function App() {
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
      <ScrollView contentContainerStyle={{ alignItems: "center" }}>
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
          <S.Button onPress={() => setResult(calculateSum(num1, num2))}>
            <Text style={{ fontSize: 20 }}>+</Text>
          </S.Button>
          <S.Button onPress={() => setResult(calculateSub(num1, num2))}>
            <Text style={{ fontSize: 20 }}>-</Text>
          </S.Button>
          <S.Button onPress={() => setResult(calculateMult(num1, num2))}>
            <Text style={{ fontSize: 20 }}>*</Text>
          </S.Button>
          <S.Button onPress={() => setResult(calculateDivi(num1, num2))}>
            <Text style={{ fontSize: 20 }}>/</Text>
          </S.Button>
        </S.InputContainer>
        <S.Result>{result}</S.Result>

        <S.ClearButton onPress={clear}>
          <Text>Clear</Text>
        </S.ClearButton>
      </ScrollView>
    </S.Container>
  );
}
