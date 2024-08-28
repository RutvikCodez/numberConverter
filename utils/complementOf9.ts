export const complementOf9 = (n: number) => {
  let digits = n.toString().split("");
  let result = digits
    .map((digit) => (digit !== "." ? 9 - parseInt(digit) : "."))
    .join("");
  return result;
};
