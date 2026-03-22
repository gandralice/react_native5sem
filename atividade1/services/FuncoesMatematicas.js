import { Alert } from 'react-native';

class FuncoesMatematicas{
    static funcaoCalculo(num1, num2, acao){
    var resultado;
    switch(acao){
        case '+':
            resultado = parseFloat(num1) + parseFloat(num2);
            break;
        case '-':
            resultado = parseFloat(num1) - parseFloat(num2);
            break;
        case '/':
            resultado = parseFloat(num1) / parseFloat(num2);
            break;
        case '*':
            resultado = parseFloat(num1) * parseFloat(num2);
            break;

        default:
            break;
    } 

    if(isNaN(resultado)){
        alert('Erro', 'Insira números válidos!');
    } else{
         alert(`Resultado: ${resultado}`);
    }
    }
}
export default FuncoesMatematicas;