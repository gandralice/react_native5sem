import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text1}>Calculadora </Text>
            <Text style={styles.text2}>Operações Básicas</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 37, 
        color: '#69328d', 
        margin: 5,
    },
    text2: {
        textAlign: 'center', 
        fontWeight: 'bold', 
        fontSize: 18, 
        color: '#a17ebf',
        fontStyle: 'italic',
    }

});
export default HomeScreen;