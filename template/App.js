import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./screens/HomeScreen";
import CalculoScreen from "./screens/CalculoScreen";
import TimerScreen from "./screens/TimerScreen";
import { NavigationContainer } from "@react-navigation/native";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* envolve tudo */}
      <Drawer.Navigator>
        {/* cria o menu lateral */}
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        {/* cria tela */}
        <Drawer.Screen name="Calculo" component={CalculoScreen}></Drawer.Screen>
        <Drawer.Screen name="Timer" component={TimerScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
