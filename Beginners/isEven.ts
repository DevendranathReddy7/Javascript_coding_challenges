import { assertEqual } from "./util/assertEqual.js";

function isEven(num: number): boolean {
  return num % 2 === 0;
}

console.log(isEven(2));

// These "asserts" are used for self-checking
assertEqual(isEven(2), true);
assertEqual(isEven(5), false);
assertEqual(isEven(0), true);
