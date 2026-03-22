import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox.js';
import CustomButton from '../../components/customButtom/CustomButtom.js';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../services/FuncoesMatematicas.js';

function CalculoScreen() {
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [selectedValue, setSelectedValue] = useState('Somar');
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Cálculo de Dois Números</Text>
            <TextInputBox value={number1}
                onChangeText={setNumber1}
                placeholder="Digite o 1° número"
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
                placeholder="Digite o 2° número"
                keyboardType="numeric"
            />
            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.funcaoCalculo(number1, number2, selectedValue)}
                style={styles.button}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center', 
        fontWeight: 'bold',  
        color: '#69328d', 
        margin: 5,
    },
    picker: {
        height: 50,
        width: 145,
        borderRadius: 5,
        borderColor: '#a17ebf',
        borderWidth: 2,
        color: '#69328d',
        fontSize: 14,
        textAlign: 'center',
        fontWeight: 'bold', 
    }
});

export default CalculoScreen;