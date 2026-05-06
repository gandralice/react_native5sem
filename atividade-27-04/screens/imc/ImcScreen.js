import React, { use, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text} from 'react-native';
import TextInputBox from '../../components/textInputBox/TextInputBox';
import CustomButton from '../../components/customButton/CustomButton';
import MathUtils from '../../services/FuncoesMatematicas';

function ImcScreen() {
    const [peso, setPeso] = useState("");
    const [altura, setAltura] = useState("");
    const [imc, setIMC] = useState("");

    return (
        <View style={styles.container}> 
            <StatusBar style="auto" />

            <Text>IMC</Text>
            <TextInputBox value={peso} onChangeText={setPeso} placeholder="Peso" />
            <TextInputBox value={altura} onChangeText={setAltura} placeholder="Altura" />

            <CustomButton title="Calcular" onPress={() => MathUtils.funcaoIMC(peso, altura, setIMC)} style={{backgroundColor: '#000'}}/>

            <Text>{imc}</Text>
                
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

export default ImcScreen;