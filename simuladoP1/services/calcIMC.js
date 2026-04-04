export default function calcIMC(peso, altura) {
  peso = parseFloat(peso);
  altura = parseFloat(altura);

  if (isNaN(peso) || isNaN(altura)) {
    return "Valores inválidos";
  }

  let imc = peso / (altura * altura);
  let classificacao = "";
  let color = "black";
  if (imc < 18.5) {
    classificacao = "Abaixo do Peso";
    color = "red";
  } else if (imc < 25) {
    classificacao = "Peso Normal";
    color = "green";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc <= 35) {
    classificacao = "Obesidade I";
    color = "red";
  } else if (imc < 40) {
    classificacao = "Obesidade II";
    color = "red";
  } else {
    classificacao = "Obesidade III";
    color = "red";
  }
  const resTxt = `${imc.toFixed(2)} - ${classificacao}`;
  return { resTxt, classificacao, imc, color };
}
