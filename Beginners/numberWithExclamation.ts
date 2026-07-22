//This function should take a non-negative integer as an input and return the factorial of that number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n .

import { assertEqual } from "./util/assertEqual.ts";

function factorial(n: number): number {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log("Example:");
console.log(factorial(4));

// These "asserts" are used for self-checking
assertEqual(factorial(0), 1);
assertEqual(factorial(1), 1);
assertEqual(factorial(5), 120);
assertEqual(factorial(10), 3628800);
assertEqual(factorial(15), 1307674368000);
