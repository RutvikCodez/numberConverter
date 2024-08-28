import { decimalToBinary } from "./decimalToBinary";
import { octalToDecimal } from "./octalToDecimal";

export const octalToBinary = (n: number) => {
    const decimal = octalToDecimal(n);
    return decimalToBinary(decimal);
  };