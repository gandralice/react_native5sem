import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CustomButton from './components/customButton/CustomButton';
import TextInputBox from './components/textInputBox/TextInputBox';

// Tipo um construtor, o que rodar nessa function é o que vai rodar na tela
export default function App() {
  return (
    // Não é HTML, mas é semelhante
    <View style={styles.container}>
      <Text>Hello, World!</Text>
      <CustomButton title="Press Me" onPress={() => alert('Button Pressed!')} style={{ backgroundColor: '#4caf59'}}/>
      <TextInputBox placeholder="digite" keyboardType="numreic"/>
      <StatusBar style="auto" />
    </View>
  );
}

// Constante que herda o StyleSheet (que pode estar em um arquivo externo e importar aqui)
const styles = StyleSheet.create({
  // CSS com algumas características específicas
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
