import { assertEqual } from "./util/assertEqual.ts";

function maxDigit(value: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(maxDigit(10));

// These "asserts" are used for self-checking
assertEqual(maxDigit(0), 0);
assertEqual(maxDigit(52), 5);
assertEqual(maxDigit(634), 6);
assertEqual(maxDigit(1), 1);
assertEqual(maxDigit(10000), 1);
