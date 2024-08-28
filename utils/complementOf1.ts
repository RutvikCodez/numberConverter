export const complementOf1 = (n: number) => {
    let digits = n.toString().split('')
    let result = digits.map(bit => bit!=='.' ?  bit === '0' ? '1' : '0' : '.').join('')
    return result
}