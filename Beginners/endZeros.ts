//Try to find out how many zeros a given number has at the end.

import { assertEqual } from "./util/assertEqual.ts";

function endZeros(a: number): number {
  let strNum = a.toString();
  let count = 0;
  for (let i = strNum.length - 1; i >= 0; i++) {
    if (strNum[i] === "0") {
      count += 1;
    } else {
      break;
    }
  }
  return count;
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
