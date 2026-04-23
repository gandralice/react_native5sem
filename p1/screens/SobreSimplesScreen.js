import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function SobreSimplesScreen() {

  return(
    <View>
      <Text style={styles.txt}>
        desenvolvimento mobile, react-native, ouheifjojposjfoalorem lorem lorem lorem lorem
      </Text>
      <Text style={styles.title}>Versão</Text>
      <Text style={styles.txt}>
        V0.1.2026
      </Text>
      <Text style={styles.title}>Políticas</Text>
      <Text style={styles.txt}>
       - lorem, lgpd, aojdjeifjaifjie
      </Text>


    </View>
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
    margin: 8,
    fontWeight: "500",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
  },
  title: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "700",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
  },
  image: {
    height: 200,
    width: 200,
  },
});


