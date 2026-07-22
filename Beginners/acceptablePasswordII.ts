// In this mission you need to create a password verification function.
// The verification conditions are:

// the length should be bigger than 6;
// should contain at least one digit.

import { assertEqual } from "./util/assertEqual.ts";

function isAcceptablePassword(password: string): boolean {
  return password.length > 6 && /\d/.test(password);
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assertEqual(isAcceptablePassword("short"), false);
assertEqual(isAcceptablePassword("muchlonger"), false);
assertEqual(isAcceptablePassword("ashort"), false);
assertEqual(isAcceptablePassword("muchlonger5"), true);
assertEqual(isAcceptablePassword("sh5"), false);
