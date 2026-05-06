import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../services/FuncoesMatematicas';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Bhaskara from '../baskara/Bhaskara';
import CalculoScreen from '../calculo/CalculoScreen';
import TrianguloScreen from '../triangulo/TrianguloScreen';
import ImcScreen from '../imc/ImcScreen';


const Tab = createBottomTabNavigator();

export default function MatematicaScreen() {
    return (
       
            <Tab.Navigator>
                <Tab.Screen name="Calculos" component={CalculoScreen} />
                <Tab.Screen name="Bhaskara" component={Bhaskara} />
                <Tab.Screen name="Triângulo" component={TrianguloScreen} />
                <Tab.Screen name="IMC" component={ImcScreen} />
            </Tab.Navigator>
     
    )
}