//Reverse the digits of a given integer. For instance, 1234 should become 4321. For negative integers, the sign should remain in the front; e.g., -123 becomes -321.
import { assertEqual } from "./util/assertEqual.ts";

function reverseDigits(num: number): number {
  const isNeg = num < 0;
  const numStr = num.toString();
  let updated = isNeg ? "-" : "";
  // your code here
  for (let i = numStr.length - 1; i >= 0; i--) {
    if (numStr[i] !== "-") {
      updated += numStr[i];
    }
  }
  return Number(updated);
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
