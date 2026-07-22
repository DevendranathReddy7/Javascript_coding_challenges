// In this mission you need to create a password verification function.
// The verification conditions are:
// the length should be bigger than 6;
// should contain at least one digit, but cannot consist of just digits.

import { assertEqual } from "./util/assertEqual.ts";

function isAcceptablePassword(password: string): boolean {
  // your code here
  //d is to check for digits and D is for to check non digits
  return password.length > 6 && /\d/.test(password) && /\D/.test(password);
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assertEqual(isAcceptablePassword("short"), false);
assertEqual(isAcceptablePassword("muchlonger"), false);
assertEqual(isAcceptablePassword("ashort"), false);
assertEqual(isAcceptablePassword("muchlonger5"), true);
assertEqual(isAcceptablePassword("sh5"), false);
assertEqual(isAcceptablePassword("1234567"), false);
