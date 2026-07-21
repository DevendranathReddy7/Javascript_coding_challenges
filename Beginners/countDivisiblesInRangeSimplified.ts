import { assertEqual } from "./util/assertEqual.ts";

function countDivisible(n: number, k: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(countDivisible(2, 1));

// These "asserts" are used for self-checking
assertEqual(countDivisible(10, 2), 5);
assertEqual(countDivisible(10, 3), 3);
assertEqual(countDivisible(10, 5), 2);
assertEqual(countDivisible(15, 4), 3);
assertEqual(countDivisible(20, 6), 3);
assertEqual(countDivisible(100, 10), 10);
assertEqual(countDivisible(200, 25), 8);
assertEqual(countDivisible(50, 7), 7);
assertEqual(countDivisible(60, 8), 7);
assertEqual(countDivisible(70, 9), 7);
