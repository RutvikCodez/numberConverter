import { decimalToOctal } from "./decimalToOctal";
import { hexaDecimalToDecimal } from "./hexaDecimalToDecimal";

export const hexaDecimalToOctal = (n: string) => {
    const decimal = hexaDecimalToDecimal(n);
    return decimalToOctal(decimal);
  };