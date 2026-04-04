import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TimerSimplesScreen from "./TimerSimplesScreen";
import PomodoroScreen from "./PomodoroScreen";

const Tab = createBottomTabNavigator();

export default function TimerScreen() {
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
      <Tab.Screen name="Timer" component={TimerSimplesScreen}></Tab.Screen>
      {/* registrando a tela */}
      <Tab.Screen name="Pomodore" component={PomodoroScreen}></Tab.Screen>
    </Tab.Navigator>
  );
}
