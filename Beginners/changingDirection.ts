//You are given a sequence of integers. Your task in this mission is to find, how many times the sorting direction was changed in the given sequence. If the elements are equal - the previous sorting direction remains the same, if the sequence starts from the same elements - look for the next different to determine the sorting direction.

import { assertEqual } from "./util/assertEqual.ts";

function changingDirection(elements: number[]): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(changingDirection([1, 2, 3, 4, 5]));

// These "asserts" are used for self-checking
assertEqual(changingDirection([1, 2, 3, 4, 5]), 0);
assertEqual(changingDirection([1, 2, 3, 2, 1]), 1);
assertEqual(changingDirection([1, 2, 2, 1, 2, 2]), 2);
