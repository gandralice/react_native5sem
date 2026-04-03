export default function calculoImc(peso, altura) {
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  if (isNaN(peso) || isNaN(altura)) {
    return "Valores inválidos";
  }

  let imc = peso / (altura * altura);
  let classificacao = "";

  if (imc < 18.5) classificacao = "Abaixo do Peso";
  else if (imc < 25) classificacao = "Peso Normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc <= 35) classificacao = "Obesidade I";
  else if (imc < 40) classificacao = "Obesidade II";
  else classificacao = "Obesidade III";

  return `${imc.toFixed(2)} - ${classificacao}`;
}
