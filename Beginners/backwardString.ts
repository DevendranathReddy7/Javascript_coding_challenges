//You should return a given string in reverse order.

import { assertEqual } from "./util/assertEqual.ts";
function backwardString(value: string): string {
  // your code here
  let updated = "";
  for (let i = value.length - 1; i >= 0; i--) {
    updated += value[i];
  }
  return updated;
}

console.log("Example:");
console.log(backwardString("val"));

// These "asserts" are used for self-checking
assertEqual(backwardString("val"), "lav");
assertEqual(backwardString(""), "");
assertEqual(backwardString("ohho"), "ohho");
assertEqual(backwardString("123456789"), "987654321");
