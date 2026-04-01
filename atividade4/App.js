/* ELABORE UM PROGRAMA QUE UTILIZE O DROWER PARA PAGINAR 3 PAGINAS. A HOME, CONTENDO APENAS UMA APRESENTACAO E UMA IMAGEM.
A SEGUNDA PAGINA É DE CALCULOS, ONDE OPERA UM TABCONTROL OPERANDO O CALCULO DE BASKARA, O IMC, E O SOMADOR DE 4 OPERACOES, E O TRIANGULO.
E POR FIM A TERCEIRA PAGINA, TAMBEM COM UM TABCONTROL PARA CRIAR 2 TIMERS, UM SIMPLES COM O BOTAO DE START STOP E ZERAR, E UM INVERSO PARA POMODORO, ONDE CONTA 20MIM ATE O ZERO. */

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import BhaskaraScreen from "./screens/calculos/BhaskaraScreen";
import ImcScreen from "./screens/calculos/ImcScreen";
import OperacoesScreen from "./screens/calculos/OperacoesScreen";
import TrianguloScreen from "./screens/calculos/TrianguloScreen";
import HomeScreen from "./screens/home/HomeScreen";
import PomodoroScreen from "./screens/timers/PomodoroScreen";
import TimerScreen from "./screens/timers/TimerScreen";

function CalculosTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e0edf2",
        },
        headerTintColor: "#147ca5",
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 16,
        },

        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          height: 60,
        },
        tabBarActiveTintColor: "#147ca5",
        tabBarInactiveTintColor: "#4087a3",
      }}
    >
      <Tab.Screen name="Bhaskara" component={BhaskaraScreen} />
      <Tab.Screen name="IMC" component={ImcScreen} />
      <Tab.Screen name="Operações" component={OperacoesScreen} />
      <Tab.Screen name="Triângulos" component={TrianguloScreen} />
    </Tab.Navigator>
  );
}

function TimersTabs() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#e0edf2",
        },
        headerTintColor: "#147ca5",
        headerTitleStyle: {
          fontWeight: "bold",
        },

        tabBarStyle: {
          backgroundColor: "#f5f5f5",
          height: 60,
        },
        tabBarActiveTintColor: "#147ca5",
        tabBarInactiveTintColor: "#75b3cb",
      }}
    >
      <Tab.Screen name="Timer" component={TimerScreen} />
      <Tab.Screen name="Pomodoro" component={PomodoroScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  const Drawer = createDrawerNavigator();

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: "#147ca5",
          },
          headerTintColor: "rgba(241, 225, 250, 1)",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          tabBarStyle: {
            backgroundColor: "#f5f5f5",
            height: 60,
          },
          tabBarActiveTintColor: "#147ca5",
          tabBarInactiveTintColor: "#75b3cb",
        }}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Cálculos" component={CalculosTabs} />
        <Drawer.Screen name="Timers" component={TimersTabs} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
