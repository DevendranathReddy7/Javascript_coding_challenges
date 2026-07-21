import { assertEqual } from "./util/assertEqual.ts";

function reverseDigits(num: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(reverseDigits(32));

// These "asserts" are used for self-checking
assertEqual(reverseDigits(1234), 4321);
assertEqual(reverseDigits(0), 0);
assertEqual(reverseDigits(-123), -321);
assertEqual(reverseDigits(5), 5);
assertEqual(reverseDigits(-9), -9);
assertEqual(reverseDigits(100), 1);
assertEqual(reverseDigits(-100), -1);
assertEqual(reverseDigits(54321), 12345);
assertEqual(reverseDigits(1111), 1111);
assertEqual(reverseDigits(987654321), 123456789);
