import { assertEqual } from "./util/assertEqual";

function isAllUpper(text: string): boolean {
  // your code here
  return false;
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

// These "asserts" are used for self-checking
assertEqual(isAllUpper("ALL UPPER"), true);
assertEqual(isAllUpper("all lower"), false);
assertEqual(isAllUpper("mixed UPPER and lower"), false);
assertEqual(isAllUpper(""), true);
assertEqual(isAllUpper("444"), true);
assertEqual(isAllUpper("55 55 5 "), true);
