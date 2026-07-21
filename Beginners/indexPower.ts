import { assertEqual } from "./util/assertEqual";

function indexPower(ar: number[], n: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(indexPower([1, 2, 3], 2));

// These "asserts" are used for self-checking
assertEqual(indexPower([1, 2, 3, 4], 2), 9);
assertEqual(indexPower([1, 3, 10, 100], 3), 1000000);
assertEqual(indexPower([0, 1], 0), 1);
assertEqual(indexPower([1, 2], 3), -1);
