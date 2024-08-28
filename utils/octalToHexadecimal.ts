import { decimalToHexadecimal } from "./decimalToHexadecimal";
import { octalToDecimal } from "./octalToDecimal";

export const octalToHexadecimal = (n: number) => {
  const decimal = octalToDecimal(n);
  return decimalToHexadecimal(decimal);
};
