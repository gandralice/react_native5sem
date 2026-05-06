import React, { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import MathUtils from '../../services/FuncoesMatematicas';


function TrianguloScreen() {
    const [lado1, setLado1] = useState("");
    const [lado2, setLado2] = useState("");
    const [lado3, setLado3] = useState("");
    const [triangulo, setTriangulo] = useState("");

    return(
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text>Triângulos</Text>

            <TextInputBox value={lado1} onChangeText={setLado1} placeholder="Lado 1" keyboardType="numeric" />

            <TextInputBox value={lado2} onChangeText={setLado2} placeholder="Lado 2" keyboardType="numeric" />

            <TextInputBox value={lado3} onChangeText={setLado3} placeholder="Lado 3" keyboardType="numeric" />

            <CustomButton title="Enviar" onPress={() => MathUtils.funcaoTriangulo(lado1, lado2, lado3, setTriangulo)} style={{ backgroundColor: '#000' }} />

            <Text>{triangulo}</Text>

        </View>
    )
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

});

export default TrianguloScreen;
