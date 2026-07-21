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
