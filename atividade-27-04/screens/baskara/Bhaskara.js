import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import { Picker } from '@react-native-picker/picker';
import MathUtils from '../../services/FuncoesMatematicas';



function Bhaskara(){
    const [number1, setNumber1] = useState('');
    const [number2, setNumber2] = useState('');
    const [number3, setNumber3] = useState('');
    const [resp, setResp] = useState('');
    

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <Text style={styles.title}>Fórmula de Bhaskara</Text>
            <TextInputBox
                value={number1}
                onChangeText={setNumber1}
                placeholder="Digite o valor de A:"
                keyboardType="numeric"
            />

            <TextInputBox
                value={number2}
                onChangeText={setNumber2}
                placeholder="Digite o valor de B:"
                keyboardType="numeric"
            />

            <TextInputBox
                value={number3}
                onChangeText={setNumber3}
                placeholder="Digite o valor de C:"
                keyboardType="numeric"
            />
            <CustomButton
                title="Calcular"
                onPress={() =>
                    MathUtils.funcaoBhaskara(number1, number2, number3, setResp)}
                style={styles.button}
            />

            <Text>
            {resp}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eaeaea',
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
})

export default Bhaskara;