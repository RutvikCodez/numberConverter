import { decimalToBinary } from "./decimalToBinary";
import { hexaDecimalToDecimal } from "./hexaDecimalToDecimal";

export const hexadecimalToBinary = (n: string) => {
    const decimal = hexaDecimalToDecimal(n);
    return decimalToBinary(decimal);
  };