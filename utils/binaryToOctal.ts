import { binaryToDecimal } from "./binaryToDecimal";
import { decimalToOctal } from "./decimalToOctal";

export const binaryToOctal = (n: number) => {
  const decimal = binaryToDecimal(n);
  return decimalToOctal(decimal);
};
