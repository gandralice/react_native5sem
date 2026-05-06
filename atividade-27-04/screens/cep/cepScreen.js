import React, {useState} from "react";
import { StatusBar } from "expo-status-bar";
import {StyleSheet, View, Text} from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import CepApis from "../../apis/CepApis";


function cepScreen() {
    const [cep, setCep] = useState("");
    const [endereco, setEndereco] = useState(null);

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />

            <Text style={styles.title}>CEP</Text>
            <TextInputBox 
                value={cep}
                onChangeText={setCep}
                placeholder="Digite o CEP"
                keyboardType="numeric"
            />
            <CustomButton 
                title="Calcular"
                onPress={() => CepApis.buscaEndereco(cep, setEndereco)}
                style={styles.button}
            />
            <Text style={styles.mensagem}>{endereco ? `Seu endereço: ${endereco.logradouro}` : 'Insira o CEP'}</Text>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor:'#fff',
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
    },
    mensagem: {
        fontSize: 18,
        marginBottom: 20,
    }
})

export default cepScreen;