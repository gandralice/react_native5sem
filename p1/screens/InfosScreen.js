import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PerfilScreen from "./PerfilScreen";
import SobreSimplesScreen from "./SobreSimplesScreen";

const Tab = createBottomTabNavigator();

export default function InfosScreen() {
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
      <Tab.Screen name="Sobre" component={SobreSimplesScreen}></Tab.Screen>
      {/* registrando a tela */}
      <Tab.Screen name="Perfil" component={PerfilScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
