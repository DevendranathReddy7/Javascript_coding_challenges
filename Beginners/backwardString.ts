import { assertEqual } from "./util/assertEqual.ts";
function backwardString(value: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(backwardString("val"));

// These "asserts" are used for self-checking
assertEqual(backwardString("val"), "lav");
assertEqual(backwardString(""), "");
assertEqual(backwardString("ohho"), "ohho");
assertEqual(backwardString("123456789"), "987654321");
