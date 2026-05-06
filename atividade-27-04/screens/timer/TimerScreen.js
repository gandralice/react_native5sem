import CalculoScreen from "../calculo/CalculoScreen";
import Bhaskara from "../baskara/Bhaskara";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function TimerScreen() {
    return (
       
            <Tab.Navigator>
                <Tab.Screen name="Pomodoro" component={CalculoScreen} />
                <Tab.Screen name="Temporizador" component={Bhaskara} />
            </Tab.Navigator>
     
    )
}