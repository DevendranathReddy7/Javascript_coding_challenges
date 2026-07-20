import { assertEqual } from "./util/assertEqual.ts";

function numberLength(value: number): number {
  const len = value.toString().length;
  return len;
}

console.log(numberLength(10));

// These "asserts" are used for self-checking
assertEqual(numberLength(10), 2);
assertEqual(numberLength(0), 1);
assertEqual(numberLength(4), 1);
assertEqual(numberLength(44), 2);
