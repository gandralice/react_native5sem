import { StyleSheet, Text, ScrollView } from "react-native";
import InputBox from "../components/Inp/InputBox";
import CustomButton from "../components/Btn/CustomButton";
import React from "react";
import calcIMC from "../services/calcIMC";

export default function IMCScreen() {
  const [peso, setPeso] = React.useState("");
  const [altura, setAltura] = React.useState("");
  const [result, setResult] = React.useState("");
  const [color, setColor] = React.useState("black");

  const calcResultado = () => {
    if (isNaN(peso) || isNaN(altura)) {
      return { resTxt: "Valores inválidos", color: "black" };
    }
    const res = calcIMC(peso, altura);
    setResult(res.resTxt);
    setColor(res.color || "black");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputBox
        value={peso}
        onChangeText={setPeso}
        placeholder="1º número"
        keyboardType="numeric"
      ></InputBox>
      <InputBox
        value={altura}
        onChangeText={setAltura}
        placeholder="2º número"
        keyboardType="numeric"
      ></InputBox>
      <CustomButton title="calcular" onPress={calcResultado}></CustomButton>

      <Text style={{ color }}>{result}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#e6dbe3",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 20,
  },
  btnContainer: {
    flexDirection: "row",
  },
  txt: {
    margin: 20,
    fontWeight: "500",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
  },
  image: {
    height: 200,
    width: 200,
  },
});
