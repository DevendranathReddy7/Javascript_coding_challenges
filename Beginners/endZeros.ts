import { assertEqual } from "./util/assertEqual.ts";

function endZeros(a: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(endZeros(10));

// These "asserts" are used for self-checking
assertEqual(endZeros(0), 1);
assertEqual(endZeros(1), 0);
assertEqual(endZeros(10), 1);
assertEqual(endZeros(101), 0);
assertEqual(endZeros(245), 0);
assertEqual(endZeros(100100), 2);
