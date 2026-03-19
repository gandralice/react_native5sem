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
