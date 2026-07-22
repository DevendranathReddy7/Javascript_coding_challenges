//You are given an array with positive integers (number) and an integer (number) N. You should find the N-th power of the element in the array with the index N. If N is outside of the array, then return -1. Don't forget that the first element has the index 0.

import { assertEqual } from "./util/assertEqual.ts";

function indexPower(ar: number[], n: number): number {
  // your code here
  if (ar.length < n) return -1;

  return ar[n] ** n;
}

console.log("Example:");
console.log(indexPower([1, 2, 3], 2));

// These "asserts" are used for self-checking
assertEqual(indexPower([1, 2, 3, 4], 2), 9);
assertEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assertEqual(indexPower([0, 1], 0), 1);
assertEqual(indexPower([1, 2], 3), -1);
