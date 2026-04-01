import { View, Text, Image, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Calculadora & Timer</Text>
      <Image source={require("../../assets/img2.png")} style={styles.image} />
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
  text1: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 28,
    color: "#147ca5",
    margin: 10,
  },
  image: {
    // maxHeight: 200,
  },
});
export default HomeScreen;
