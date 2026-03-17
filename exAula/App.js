import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import CustomButtom from "./components/customButtom/CustomButtom";
import TextInputBox from "./components/textInputBox/TextInputBox";
import React, { useState } from "react";
import funcaoSoma from "./services/FuncaoSoma";
import Logo from "./components/logo/Logo";

export default function App() {
  const [number1, setNumber1] = useState("");
  const [number2, setNumber2] = useState("");
  const [resp, setResp] = useState(0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <Logo />
        <Text>Digite um numero</Text>
        <TextInputBox
          value={number1}
          onChangeText={setNumber1}
          placeholder="Digite o primeiro número"
          keyboardType="numeric"
        />
        <Text>Digite o segundo numero</Text>
        <TextInputBox
          value={number2}
          onChangeText={setNumber2}
          placeholder="Digite o segundo número"
          keyboardType="numeric"
        />
        <CustomButtom
          title="Calcular"
          onPress={() => funcaoSoma(number1, number2, setResp)}
          style={{ backgroundColor: "#4caf50" }}
        />
        <Text>Resultado: {resp} </Text>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
