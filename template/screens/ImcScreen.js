import { StyleSheet, View, Text } from "react-native";
import React from "react";
import calculoImc from "../services/calculoImc";
import CustomButton from "../components/Btn/CustomButton";
import InputBox from "../components/Inp/InputBox";
import { clear } from "../services/clear";

export default function ImcScreen() {
  const [altura, setAltura] = React.useState("");
  const [peso, setPeso] = React.useState("");
  const [result, setResult] = React.useState("");

  const calcImc = () => {
    if (!peso || !altura) {
      setResult("Digite os valores!");
      return;
    }
    const res = calculoImc(peso, altura);
    setResult(res);
  };

  return (
    <View style={styles.container}>
      <InputBox
        value={peso}
        onChangeText={setPeso}
        placeholder="peso"
        keyboardType="numeric"
      ></InputBox>

      <InputBox
        value={altura}
        onChangeText={setAltura}
        placeholder="altura"
        keyboardType="numeric"
      ></InputBox>
      <View style={styles.btnContainer}>
        <CustomButton
          title="calcular"
          onPress={calcImc}
          style={{ margin: 5 }}
        ></CustomButton>
        <CustomButton
          title="clear"
          onPress={() => clear(setPeso, setAltura, setResult)}
          style={{ margin: 5 }}
        ></CustomButton>
      </View>

      <Text style={styles.result}>Resultado: {result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e6dbe3",
    alignItems: "center",
    justifyContent: "center",
  },
  btnContainer: {
    flexDirection: "row",
  },
  result: {
    margin: 20,
    fontWeight: 500,
    color: "#5e5e5e",
    backgroundColor: "#f2f1f2",
    borderRadius: 6,
    padding: 8,
    minWidth: 200,
  },
});
