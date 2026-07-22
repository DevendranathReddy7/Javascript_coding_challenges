//You have a number and you need to determine which digit in this number is the biggest.

import { assertEqual } from "./util/assertEqual.ts";

function maxDigit(value: number): number {
  let max = -Infinity;
  let ValStr = value.toString();
  for (let i = 0; i < ValStr.length; i++) {
    if (Number(ValStr[i]) > max) {
      max = Number(ValStr[i]);
    }
  }
  return max;
}

console.log("Example:");
console.log(maxDigit(10));

// These "asserts" are used for self-checking
assertEqual(maxDigit(0), 0);
assertEqual(maxDigit(52), 5);
assertEqual(maxDigit(634), 6);
assertEqual(maxDigit(1), 1);
assertEqual(maxDigit(10000), 1);
