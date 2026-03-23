import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import * as S from "./styled";
import React from "react";

export default function App() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [num3, setNum3] = React.useState("");
  const [num4, setNum4] = React.useState("");
  const [result, setResult] = React.useState(0);
  const [message, setMessage] = React.useState("");

  function media() {
    const calc = (+num1 + +num2 + +num3 + +num4) / 4;
    setResult(calc.toFixed(2));
    if (calc >= 7.0) {
      setMessage("Aprovado");
    } else {
      setMessage("Reprovado");
    }
  }
  return (
    <S.Container>
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          alignItems: "center",
          paddingBottom: 50,
        }}
      >
        <Image
          source={require("./assets/splash-icon.png")}
          style={{ width: 100, height: 100, marginBottom: 20 }}
        />
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
        <S.CalcButton onPress={media}>
          <Text>Calc</Text>
        </S.CalcButton>

        <S.Result score={result}>{result}</S.Result>
        <S.ResMessage score={result}>{message}</S.ResMessage>

        {/* para mostrar o ScrollView*/}
        <S.InputContainer>
          <S.Input placeholder="scroll"></S.Input>
        </S.InputContainer>
        <S.InputContainer>
          <S.Input placeholder="scroll"></S.Input>
        </S.InputContainer>
        <S.InputContainer>
          <S.Input placeholder="scroll"></S.Input>
        </S.InputContainer>
      </ScrollView>
    </S.Container>
  );
}
