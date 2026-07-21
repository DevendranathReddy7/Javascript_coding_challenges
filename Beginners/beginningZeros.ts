import { assertEqual } from "./util/assertEqual";

function beginningZeros(a: string): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(beginningZeros("10"));

// These "asserts" are used for self-checking
assertEqual(beginningZeros("100"), 0);
assertEqual(beginningZeros("001"), 2);
assertEqual(beginningZeros("100100"), 0);
assertEqual(beginningZeros("001001"), 2);
assertEqual(beginningZeros("012345679"), 1);
assertEqual(beginningZeros("0000"), 4);
