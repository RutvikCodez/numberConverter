export const octalToDecimal = (n: number) => {
  const [integerPart, fractionalPart] = n.toString().split(".");
  const integerDecimal = parseInt(integerPart, 8);
  let fractionalDecimal = 0;
  if (fractionalPart) {
    for (let i = 0; i < fractionalPart.length; i++) {
      fractionalDecimal +=
        parseInt(fractionalPart[i], 10) * Math.pow(8, -(i + 1));
    }
  }
  return integerDecimal + fractionalDecimal;
};
