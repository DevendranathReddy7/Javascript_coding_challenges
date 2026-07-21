//length should >6

import { assertEqual } from "./util/assertEqual.ts";
function isAcceptablePassword(password: string): boolean {
  return password.length > 6;
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assertEqual(isAcceptablePassword("short"), false);
assertEqual(isAcceptablePassword("muchlonger"), true);
assertEqual(isAcceptablePassword("ashort"), false);
