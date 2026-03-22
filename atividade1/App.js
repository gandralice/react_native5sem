import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculoScreen from './screens/calculo/CalculoScreen';
import HomeScreen from './screens/home/HomeScreen';

// Tipo um construtor, o que rodar nessa function é o que vai rodar na tela
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
      <NavigationContainer>
        <Tab.Navigator  screenOptions={{
    headerStyle: {
      backgroundColor: '#69328d'
    },
    headerTintColor: 'rgba(241, 225, 250, 1)',
    headerTitleStyle: {
      fontWeight: 'bold'
    },

    tabBarStyle: {
      backgroundColor: '#f5f5f5',
      height: 60
    },
    tabBarActiveTintColor: '#69328d',
    tabBarInactiveTintColor: '#a17ebf'
  }}>
          <Tab.Screen name="Atividade" component={HomeScreen} />
          <Tab.Screen name="Cálculos" component={CalculoScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}
