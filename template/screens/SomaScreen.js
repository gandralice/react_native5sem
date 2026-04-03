import { StyleSheet, View, Text, ScrollView } from "react-native";
import CustomButton from "../components/Btn/CustomButton";
import InputBox from "../components/Inp/InputBox";
import React from "react";
import { soma } from "../services/operacoesBasicas";
import { clear } from "../services/clear";

// ---------------------==== add picker!! ====---------------------

export default function SomaScreen() {
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [result, setResult] = React.useState("");
  const [hist, setHist] = React.useState([]);

  const calcResult = () => {
    if (!num1 || !num2) {
      setResult("Digite os valores!");
      alert(`Digite os valores!`);
      return;
    }
    const res = soma(num1, num2);
    setResult(res);

    setHist((prev) => [...prev, `${num1} + ${num2} = ${res}`]);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <InputBox
        value={num1}
        onChangeText={setNum1}
        placeholder="primeiro num"
        keyboardType="numeric"
      />
      <InputBox
        value={num2}
        onChangeText={setNum2}
        placeholder="primeiro num"
        keyboardType="numeric"
      />
      <View style={styles.btnContainer}>
        <CustomButton
          title="soma"
          onPress={() => calcResult()}
          style={{ margin: 5 }}
        />
        <CustomButton
          title="clear"
          onPress={() => clear(setNum1, setNum2, setResult)}
          style={{ margin: 5 }}
        />
      </View>

      <Text style={styles.result}>Resultado: {result}</Text>

      <Text style={styles.txt}>Histórico:</Text>
      {hist.map((item, index) => (
        <Text style={styles.list} key={index}>
          {index + 1}º {item}
        </Text>
      ))}
      <View style={styles.btnContainer}>
        <CustomButton
          title="clear"
          onPress={() => setHist([])}
          style={{ margin: 5 }}
        />
        <CustomButton
          title="remover último"
          onPress={() => setHist((prev) => prev.slice(0, -1))}
          style={{ margin: 5 }}
        />
      </View>
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
    marginTop: 10,
  },
  txt: {
    marginBottom: 10,
    fontWeight: "500",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
  },
  result: {
    margin: 20,
    fontWeight: "500",
    color: "#5e5e5e",
    backgroundColor: "#f2f1f2",
    borderRadius: 6,
    padding: 8,
    minWidth: 100,
  },
  list: {
    margin: 2,
    fontWeight: "500",
    color: "#5e5e5e",
    backgroundColor: "#f2f1f2",
    borderRadius: 6,
    padding: 2,
    width: 200,
  },
});
