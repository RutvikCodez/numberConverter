import { complementOf9 } from "./complementOf9"

export const complementOf10 = (n:number) => {
    const complement9 = complementOf9(n)
    return parseFloat(complement9) + 1;
}