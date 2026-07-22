// The verification conditions are:

// the length should be bigger than 6;
// should contain at least one digit, but it cannot consist of just digits;
// if the password is longer than 9 - previous rule is not required.

import { assertEqual } from "./util/assertEqual.ts";
function isAcceptablePassword(password: string): boolean {
  // your code here
  return (
    (password.length > 6 && /\d/.test(password) && /\D/.test(password)) ||
    password.length > 9
  );
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assertEqual(isAcceptablePassword("short"), false);
assertEqual(isAcceptablePassword("short54"), true);
assertEqual(isAcceptablePassword("muchlonger"), true);
assertEqual(isAcceptablePassword("ashort"), false);
assertEqual(isAcceptablePassword("notshort"), false);
assertEqual(isAcceptablePassword("muchlonger5"), true);
assertEqual(isAcceptablePassword("sh5"), false);
assertEqual(isAcceptablePassword("1234567"), false);
assertEqual(isAcceptablePassword("12345678910"), true);
