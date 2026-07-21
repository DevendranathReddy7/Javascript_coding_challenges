import { assertEqual } from "./util/assertEqual";

function factorial(n: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(factorial(4));

// These "asserts" are used for self-checking
assertEqual(factorial(0), 1);
assertEqual(factorial(1), 1);
assertEqual(factorial(5), 120);
assertEqual(factorial(10), 3628800);
assertEqual(factorial(15), 1307674368000);
