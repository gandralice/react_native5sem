import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/screens/Home";
import Calculadora from "./src/screens/Calculadora";
import Media from "./src/screens/Media";
import Triangulo from "./src/screens/Triangulo";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#ddb0dd",
            height: 70,
          },
          tabBarActiveTintColor: "#b973b9",
          tabBarInactiveTintColor: "#ffffff",
          headerStyle: {
            backgroundColor: "#ddb0dd",
          },
          headerTintColor: "#ffffff",
        }}
      >
        <Tab.Screen name="Início" component={Home} />
        <Tab.Screen name="Calculadora" component={Calculadora} />
        <Tab.Screen name="Média" component={Media} />
        <Tab.Screen name="Triângulo" component={Triangulo} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
