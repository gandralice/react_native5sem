import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../services/FuncoesMatematicas';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();


function CalculoScreen() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [resp, setResp] = useState('');
    const [selectedValue, setSelectedValue] = useState('+');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Soma de Dois </Text>
            <TextInputBox
                value={number1}
                onChangeText={setNumber1}
                placeholder="Digite o primeiro número"
                keyboardType="numeric"
            />
            <Picker
                selectedValue={selectedValue}
                style={styles.picker}
                onValueChange={(itemValue, itemIndex) =>
                    setSelectedValue(itemValue)}
            >
                <Picker.Item label="Somar" value="+" />
                <Picker.Item label="Subtrair" value="-" />
                <Picker.Item label="Multiplicar" value="*" />
                <Picker.Item label="Dividir" value="/" />
            </Picker>

            <TextInputBox
                value={number2}
                onChangeText={setNumber2}
                placeholder="Digite o segundo número"
                keyboardType="numeric"
            />
            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.funcaoCalculo(number1, number2, selectedValue, setResp)}
                style={styles.button}
            />

            <Text>A resposta é: {resp}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(242, 242, 242)',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    picker: {
        height: 50,
        width: 200,
    }
});
export default CalculoScreen;