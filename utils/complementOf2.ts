import { complementOf1 } from "./complementOf1"

export const complementOf2 = (n: number) => {
    const complement1 = complementOf1(n)
    return complement1 + 1
}