import { assertEqual } from "./util/assertEqual.js";

function findRemainder(dividend: number, divisor: number): number {
  // your code here
  return dividend % divisor;
}

console.log(findRemainder(3, 2));

// These "asserts" are used for self-checking
assertEqual(findRemainder(10, 3), 1);
assertEqual(findRemainder(14, 4), 2);
assertEqual(findRemainder(27, 4), 3);
assertEqual(findRemainder(10, 5), 0);
assertEqual(findRemainder(10, 1), 0);
assertEqual(findRemainder(5, 7), 5);
assertEqual(findRemainder(7, 5), 2);
