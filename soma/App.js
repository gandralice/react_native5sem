import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import * as S from "./styled";
import React from "react";

export default function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [result, setResult] = React.useState(0);

  function sum() {
    setResult((item) => (item = +num1 + +num2));
  }
  return (
    <S.Container>
      <S.InputContainer>
        <S.Input onChangeText={setNum1} placeholder="1º numero"></S.Input>
      </S.InputContainer>
      <S.InputContainer>
        <S.Input onChangeText={setNum2} placeholder="2º numero"></S.Input>
        <S.SumButton onPress={sum}>+</S.SumButton>
      </S.InputContainer>

      <S.Result>{result}</S.Result>
    </S.Container>
  );
}
