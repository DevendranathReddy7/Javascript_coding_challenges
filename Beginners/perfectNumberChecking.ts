import { assertEqual } from "./util/assertEqual";

function isPerfect(n: number): boolean {
  // your code here
  return false;
}

console.log("Example:");
console.log(isPerfect(3));

// These "asserts" are used for self-checking
assertEqual(isPerfect(6), true);
assertEqual(isPerfect(2), false);
assertEqual(isPerfect(28), true);
assertEqual(isPerfect(20), false);
assertEqual(isPerfect(496), true);
assertEqual(isPerfect(30), false);
assertEqual(isPerfect(8128), true);
assertEqual(isPerfect(100), false);
assertEqual(isPerfect(500), false);
assertEqual(isPerfect(1000), false);
