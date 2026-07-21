import { assertEqual } from "./util/assertEqual.ts";

function isArmstrong(num: number): boolean {
  // your code here
  return false;
}

console.log("Example:");
console.log(isArmstrong(11));

// These "asserts" are used for self-checking
assertEqual(isArmstrong(153), true);
assertEqual(isArmstrong(370), true);
assertEqual(isArmstrong(947), false);
assertEqual(isArmstrong(371), true);
assertEqual(isArmstrong(407), true);
assertEqual(isArmstrong(163), false);
assertEqual(isArmstrong(100), false);
assertEqual(isArmstrong(8208), true);
assertEqual(isArmstrong(930), false);
assertEqual(isArmstrong(4), true);
