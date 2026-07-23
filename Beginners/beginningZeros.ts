import { assertEqual } from "./util/assertEqual.ts";

function beginningZeros(a: string): number {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === "0") {
      count += 1;
    } else {
      break;
    }
  }
  return count;
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
