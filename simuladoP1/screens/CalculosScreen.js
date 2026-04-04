import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ImcScreen from "./IMCScreen";
import OperacoesScreen from "./OperacoesScreen";

const Tab = createBottomTabNavigator();

export default function CalculosScreen() {
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
      <Tab.Screen name="Operações" component={OperacoesScreen}></Tab.Screen>
      {/* registrando a tela */}
      <Tab.Screen name="IMC" component={ImcScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
