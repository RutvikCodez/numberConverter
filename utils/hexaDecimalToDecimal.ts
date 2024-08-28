export const hexaDecimalToDecimal = (n: string) => {
  const [integerPart, fractionalPart] = n.toString().split(".");
  const integerDecimal = parseInt(integerPart, 16);
  console.log(integerPart,fractionalPart);  
  let fractionalDecimal = 0;
  if (fractionalPart) {
    for (let i = 0; i < fractionalPart.length; i++) {
      fractionalDecimal +=
        parseInt(fractionalPart[i], 16) * Math.pow(16, -(i + 1));
    }
  }
  return integerDecimal + fractionalDecimal;
};
