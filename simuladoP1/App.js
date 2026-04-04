import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import CalculosScreen from "./screens/CalculosScreen";
import TimerScreen from "./screens/TimerScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen
          name="Cálculos"
          component={CalculosScreen}
        ></Drawer.Screen>
        <Drawer.Screen name="Timer" component={TimerScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
