import { StyleSheet, Text, Image, ScrollView } from "react-native";

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.txt}>Bem-vindo ao app</Text>
      <Image
        source={require("../assets/icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.txt}>Scroll</Text>
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.txt}>Scroll</Text>
      <Image
        source={require("../assets/splash-icon.png")}
        style={styles.image}
        resizeMode="contain"
      />
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
