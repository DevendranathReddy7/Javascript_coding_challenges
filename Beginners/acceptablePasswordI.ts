import { assertEqual } from "./util/assertEqual.ts";

function isAcceptablePassword(password: string): boolean {
  // your code here
  return false;
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assertEqual(isAcceptablePassword("short"), false);
assertEqual(isAcceptablePassword("muchlonger"), true);
assertEqual(isAcceptablePassword("ashort"), false);
