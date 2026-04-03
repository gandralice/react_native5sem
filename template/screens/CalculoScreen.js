import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import SomaScreen from "./SomaScreen";
import ImcScreen from "./ImcScreen";

const Tab = createBottomTabNavigator();

export default function CalculoScreen() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerTintColor: "#4a4a4a",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },
        tabBarActiveTintColor: "#bd92b4",
        tabBarInactiveTintColor: "#4a4a4a",
      }}
    >
      <Tab.Screen name="Soma" component={SomaScreen}></Tab.Screen>
      {/* registrando a tela */}
      <Tab.Screen name="IMC" component={ImcScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
