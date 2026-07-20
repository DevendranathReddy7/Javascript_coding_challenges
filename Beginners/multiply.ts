import { assertEqual } from "./util/assertEqual.ts";

function multTwo(a: number, b: number): number {
  return a * b;
}

console.log(multTwo(3, 2));

// These "asserts" are used for self-checking
assertEqual(multTwo(3, 2), 6);
assertEqual(multTwo(0, 1), 0);
