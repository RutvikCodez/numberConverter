import { binaryToDecimal } from "./binaryToDecimal";
import { decimalToHexadecimal } from "./decimalToHexadecimal";

export const binaryToHexadecimal = (n: number) => {
  const decimal = binaryToDecimal(n);
  return decimalToHexadecimal(decimal);
};
