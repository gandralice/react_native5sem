import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import GatoApi from '../../apis/GatoApi';
import { ActivityIndicator } from 'react-native-web';
import {useState} from "react";


function HomeScreen() {
    const [urlGato, setUrl] = useState(null);
    const [carregando, setCarregando] = useState(false);

    const carregarNovoGato = async() => {
        setCarregando(true);
        const url = await GatoApi.buscaGato();
        setUrl(url);
        setCarregando(false);
    };

    React.useEffect(() => {
        carregarNovoGato();
    }, []);

    return (
        <View style={{ flex:1, justifyContent:'center', alignItems: 'center'}}>
            {carregando ? (
                <ActivityIndicator size="large" />
            ) : (
                urlGato && <Image style={styles.logo} source={{uri: urlGato}} />
            )}
            <Text>HomeScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent:'center'
    },
    title: {
        fontSize:24,
        marginBottom:20,
    },
    picker: {
        height:50,
        width:200,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20
    }
});

export default HomeScreen;