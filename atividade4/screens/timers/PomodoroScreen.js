import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import CustomButtom from "../../components/customButtom/CustomButtom.js";
import pomodoro from "../../services/MetodoPomodoro.js";

function TimerScreen() {
  const { time, startTimer, resetTimer, formatTimer } = pomodoro();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pomodoro</Text>
      <Text style={styles.timer}>{formatTimer(time)}</Text>
      <CustomButtom title="Iniciar" onPress={startTimer} />
      <CustomButtom title="Reset" onPress={resetTimer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
    fontWeight: "bold",
    color: "#147ca5",
    margin: 5,
  },
  timer: {
    fontSize: 80,
    marginBottom: 25,
    fontWeight: 500,
    color: "#106080",
  },
});

export default TimerScreen;
