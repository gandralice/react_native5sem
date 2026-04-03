export const soma = (n1, n2) => {
  return parseFloat(n1) + parseFloat(n2);
};
export const subtracao = (n1, n2) => {
  return parseFloat(n1) - parseFloat(n2);
};
export const divisao = (n1, n2) => {
  if (n2 == 0) {
    return 0;
  }
  const result = parseFloat(n1) / parseFloat(n2);
  return result.toFixed(2);
};
export const multiplicacao = (n1, n2) => {
  return parseFloat(n1) * parseFloat(n2);
};
