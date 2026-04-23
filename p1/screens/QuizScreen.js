import { StyleSheet, Text, Image, ScrollView, View } from "react-native";
import CustomButton from "../components/Btn/CustomButton";
import React from "react";

export default function QuizScreen() {
  const [quiz1, setQuiz1] = React.useState('');
  const [quiz2, setQuiz2] = React.useState('');
  const [quiz3, setQuiz3] = React.useState('');
  const [result, setResult]= React.useState('');

  const calcResult = () => {
    setResult(parseFloat(quiz1) + parseFloat(quiz2) + parseFloat (quiz3))
  }
  
  return (
    <ScrollView>

      <Text style={styles.txt}>Qual é a terceira letra do alfabeto? (1 ponto)</Text>
      <View style ={styles.btnContainer}>
        <CustomButton title='E' onPress={()=> setQuiz1(0)}></CustomButton>
      <CustomButton title='C' onPress={()=> setQuiz1(1)}></CustomButton>
      </View>
      <Text style={styles.txt}>Qual é a terceira letra do alfabeto? (1 ponto)</Text>
      <View style ={styles.btnContainer}>
        <CustomButton title='E' onPress={()=> setQuiz2(0)}></CustomButton>
      <CustomButton title='C' onPress={()=> setQuiz2(1)}></CustomButton>
      </View>
      <Text style={styles.txt}>Qual é a terceira letra do alfabeto? (1 ponto)</Text>
      <View style ={styles.btnContainer}>
        <CustomButton title='E' onPress={()=> setQuiz3(0)}></CustomButton>
      <CustomButton title='C' onPress={()=> setQuiz3(1)}></CustomButton>
      </View>
      <CustomButton title='enviar' onPress={()=> calcResult()} >

      </CustomButton>

      <Text> Resultado: {result} pontos.</Text>

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





