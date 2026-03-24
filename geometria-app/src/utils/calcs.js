export const calculateSum = (n1, n2) => {
  return +n1 + +n2;
};
export const calculateSub = (n1, n2) => {
  return +n1 - +n2;
};
export const calculateMult = (n1, n2) => {
  return +n1 * +n2;
};
export const calculateDivi = (n1, n2) => {
  if (+n2 === 0) {
    return "erro";
  }
  return (+n1 / +n2).toFixed(2);
};

export function calcularMedia(num1, num2, num3, num4) {
  const calc = (+num1 + +num2 + +num3 + +num4) / 4;
  const mediaFinal = calc.toFixed(2);
  const status = calc >= 6.0 ? "Aprovado" : "Reprovado";

  return {
    valor: mediaFinal,
    status: status,
  };
}

export const calcularAreaTriangulo = (base, altura) => {
  const area = (parseFloat(base) * parseFloat(altura)) / 2;
  return isNaN(area) ? "0.00" : area.toFixed(2);
};

export const identificarTriangulo = (l1, l2, l3) => {
  const a = parseFloat(l1);
  const b = parseFloat(l2);
  const c = parseFloat(l3);

  if (!a || !b || !c || a + b <= c || a + c <= b || b + c <= a) {
    return "Não é um triângulo válido";
  }
  if (a === b && b === c) return "Equilátero";
  if (a === b || a === c || b === c) return "Isósceles";
  return "Escaleno";
};
