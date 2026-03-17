
export default function funcaoSoma(number1, number2, setResp) {
  const sum = parseFloat(number1) + parseFloat(number2);
  if (isNaN(sum)) {
    alert('Por favor, insira números válidos.');
    setResp(0);
  } else {
    alert(`A soma é: ${sum}`);
    setResp(sum);
  }
}