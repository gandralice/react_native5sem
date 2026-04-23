import { StyleSheet, Text, ScrollView, View, Image } from "react-native";
import React from "react";

export default function PerfilScreen() {
  return(
  <View>
    <View style={styles.btnContainer}>
      <Text style={styles.icon}>:)</Text>
    <Text style={styles.txt}>Alice Gandra</Text>
    </View>
    
    <View>
      <Text style={styles.inform}>Email: alice@gmail.com </Text>
      <Text style={styles.inform}>Telefone: 13999999 </Text>
      <Text style={styles.inform}>Github: alice</Text>
      <Text style={styles.inform}>LinkedIn: alice</Text>
    </View>
    


  </View>);
  
  
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
  title: {
    fontSize: 16,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "700",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
  },
  icon: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: "700",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
    backgroundColor: "yellow",
    borderRadius: 500,
  },

  image: {
    height: 20,
    width: 20,
  },
  inform: {
    margin: 4,
    fontWeight: "500",
    color: "#414141",
    borderRadius: 6,
    padding: 8,
    backgroundColor: "white",
  }
});