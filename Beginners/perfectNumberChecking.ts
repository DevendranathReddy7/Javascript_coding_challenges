//A perfect number is a positive integer that is equal to the sum of its proper divisors, excluding itself. For example, 28 is a perfect number because its divisors are 1, 2, 4, 7, and 14, and their sum is 28.

import { assertEqual } from "./util/assertEqual.ts";

function isPerfect(n: number): boolean {
  // your code here
  let divisorsSum = 0;
  for (let i = 1; i <= n / 2; i++) {
    if (n % i === 0) {
      divisorsSum += i;
    }
  }

  return divisorsSum === n;
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
