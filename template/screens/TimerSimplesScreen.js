import { StyleSheet, View, Text } from "react-native";
import CustomButton from "../components/Btn/CustomButton";
import timer from "../services/timer";

export default function TimerSimplesScreen() {
  const { time, start, stop, reset, formatTime } = timer();
  return (
    <View style={styles.container}>
      <Text style={styles.time}>{formatTime(time)}</Text>
      <View style={styles.btnContainer}>
        <CustomButton title="start" onPress={start} style={{ margin: 5 }} />

        <CustomButton title="stop" onPress={stop} style={{ margin: 5 }} />

        <CustomButton title="reset" onPress={reset} style={{ margin: 5 }} />
      </View>
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
  time: {
    fontSize: 80,
    marginBottom: 25,
    fontWeight: 500,
    color: "#4a4a4a",
  },
});
