import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CalculoScreen from './screens/calculo/CalculoScreen';
import Bhaskara from './screens/baskara/Bhaskara';
import HomeScreen from './screens/home/HomeScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MatematicaScreen from './screens/matematica/MatematicaScreen';
import TimerScreen from './screens/timer/TimerScreen';
import cepScreen from './screens/cep/cepScreen';
import Alunos from './screens/alunos/Alunos';

// const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();


export default function App() {

  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Timer" component={TimerScreen} />
        <Drawer.Screen name="Cálculos" component={MatematicaScreen} />
        <Drawer.Screen name="CEP" component={cepScreen} />
        <Drawer.Screen name="Alunos" component={Alunos} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

 