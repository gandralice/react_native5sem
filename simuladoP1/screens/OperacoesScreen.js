import { StyleSheet, Text, ScrollView, View } from "react-native";
import InputBox from "../components/Inp/InputBox";
import CustomButton from "../components/Btn/CustomButton";
import React from "react";
import { soma, subtracao, divisao, multiplicacao } from "../services/opBasicas";

export default function OperacoesScreen() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [result, setResult] = React.useState("");

  const calcResultado = (op) => {
    const res = op(num1, num2);
    setResult(res);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputBox
        value={num1}
        onChangeText={setNum1}
        placeholder="1º número"
        keyboardType="numeric"
      ></InputBox>
      <InputBox
        value={num2}
        onChangeText={setNum2}
        placeholder="2º número"
        keyboardType="numeric"
      ></InputBox>
      <View style={styles.btnContainer}>
        {/* não consegui agrupar os buttons */}
        <CustomButton
          title="+"
          onPress={() => calcResultado(soma)}
        ></CustomButton>
        <CustomButton
          title="-"
          onPress={() => calcResultado(subtracao)}
        ></CustomButton>
        <CustomButton
          title="/"
          onPress={() => calcResultado(divisao)}
        ></CustomButton>
        <CustomButton
          title="*"
          onPress={() => calcResultado(multiplicacao)}
        ></CustomButton>
      </View>

      <Text>{result}</Text>
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
