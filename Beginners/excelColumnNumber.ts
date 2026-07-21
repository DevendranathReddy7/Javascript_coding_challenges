import { assertEqual } from "./util/assertEqual.ts";

function columnNumber(name: string): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(columnNumber("AA"));

// These "asserts" are used for self-checking
assertEqual(columnNumber("A"), 1);
assertEqual(columnNumber("Z"), 26);
assertEqual(columnNumber("AB"), 28);
assertEqual(columnNumber("ZY"), 701);
