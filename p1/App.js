import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./screens/HomeScreen";
import InfosScreen from "./screens/InfosScreen";
import QuizScreen from "./screens/QuizScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}></Drawer.Screen>
        <Drawer.Screen
          name="Sobre"
          component={InfosScreen}
        ></Drawer.Screen>
        <Drawer.Screen name="Quiz" component={QuizScreen}></Drawer.Screen>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
