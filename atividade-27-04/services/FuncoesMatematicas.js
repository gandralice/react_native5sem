

class MathUtils {
    static funcaoCalculo(number1, number2, acao, setResp) {
        var sum;
        switch(acao) {
            case '+':
                sum = parseFloat(number1) + parseFloat(number2);
                break;
            case '-':
                sum = parseFloat(number1) - parseFloat(number2);
                break;
            case '*':
                sum = parseFloat(number1) * parseFloat(number2);
                break;
            case '/':
                sum = parseFloat(number1) / parseFloat(number2);
                break;
            default:
                break;
        }

        if (isNaN(sum)) {
            alert('Erro', 'Por favor, insira números válidos.');
        } else {
            setResp('A resposta é: ' +  sum);
            // alert(`Resultado: A soma é: ${sum}`);
        }
    }

    static funcaoBhaskara(number1, number2, number3, setResp) {
        const delta = (number2 * number2) - (4 * number1 * number3);

        if(delta < 0) {
            setResp("Não tem raiz");
        }

        const x1 = (-number2 + Math.sqrt(delta)) / (2 * number1);
        const x2 = (-number2 - Math.sqrt(delta)) / (2 * number1);

        
        setResp("Delta: " + delta + " X1: " +  x1 + " X2: " + x2);
    }

    static funcaoTriangulo(lado1, lado2, lado3, setTriangulo) {
        if(parseFloat(lado1) + parseFloat(lado2) > parseFloat(lado3) && parseFloat(lado2) + parseFloat(lado3) > parseFloat(lado1) && parseFloat(lado1) + parseFloat(lado3) > parseFloat(lado2)) {

            if(parseFloat(lado1) == parseFloat(lado2) && parseFloat(lado1) == parseFloat(lado3)){
                setTriangulo("Triângulo Equilátero");
            } else if (parseFloat(lado1) != parseFloat(lado2) && parseFloat(lado2) != parseFloat(lado3) && parseFloat(lado1) != parseFloat(lado3)) {
                setTriangulo("Triângulo Escaleno");
            }
            else {
                setTriangulo("Triângulo Isósceles");
            }
        } else {
            setTriangulo("Os valores informados não formam um triângulo :(");
        }
    }

    static funcaoIMC(peso, altura, setIMC) {
        const imc = parseFloat(peso) / (parseFloat(altura)* parseFloat(altura));

        if(imc < 18.5) {
            setIMC('IMC: ' + imc.toFixed(2) + ' | Abaixo do peso');
        } else if (imc >= 18.5 && imc <= 24.9) {
            setIMC('IMC: ' + imc.toFixed(2) + ' | Peso normal');
        } else if (imc >= 25.0 && imc <= 29.9) {
            setIMC('IMC: ' + imc.toFixed(2) + ' | Sobrepeso');
        } else if (imc >=30 && imc <= 34.9) {
            setIMC('IMC: ' + imc.toFixed(2) + ' | Obesidade Grau I');
        } else if (imc >= 35 && imc <= 39.9) {
            setIMC('IMC: ' + imc.toFixed(2) + ' | Obesidade Grau II');
        } else if (imc > 39.9){
            setIMC('IMC: ' + imc.toFixed(2) + ' | Obesidade Grau III');
        }

    }
}

export default MathUtils;