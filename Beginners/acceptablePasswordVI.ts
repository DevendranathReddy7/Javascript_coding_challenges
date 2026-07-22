// The verification conditions are:

// the length should be bigger than 6;
// should contain at least one digit, but it cannot consist of just digits;
// having numbers or containing just numbers does not apply to the password longer than 9.
// a string should not contain the word "password" in any case;
// must contain at least 3 different (case-sensitive) letters (or digits) even if it is longer than 10

import { assertEqual } from "./util/assertEqual.ts";

function isAcceptablePassword(password: string): boolean {
  // your code here
  let seen = new Set();

  for (let i = 0; i < password.length; i++) {
    seen.add(password[i]);
  }
  if (seen.size < 3) return false;
  return (
    ((password.length > 6 && /\d/.test(password) && /\D/.test(password)) ||
      password.length > 9) &&
    !password.toLowerCase().includes("password")
  );
}

console.log("Example:");
console.log(isAcceptablePassword("short"));

// These "asserts" are used for self-checking
assertEqual(isAcceptablePassword("short"), false);
assertEqual(isAcceptablePassword("short54"), true);
assertEqual(isAcceptablePassword("muchlonger"), true);
assertEqual(isAcceptablePassword("ashort"), false);
assertEqual(isAcceptablePassword("muchlonger5"), true);
assertEqual(isAcceptablePassword("sh5"), false);
assertEqual(isAcceptablePassword("1234567"), false);
assertEqual(isAcceptablePassword("12345678910"), true);
assertEqual(isAcceptablePassword("password12345"), false);
assertEqual(isAcceptablePassword("PASSWORD12345"), false);
assertEqual(isAcceptablePassword("pass1234word"), true);
assertEqual(isAcceptablePassword("aaaaaa1"), false);
assertEqual(isAcceptablePassword("aaaaaabbbbb"), false);
assertEqual(isAcceptablePassword("aaaaaabb1"), true);
assertEqual(isAcceptablePassword("abc1"), false);
assertEqual(isAcceptablePassword("abbcc12"), true);
assertEqual(isAcceptablePassword("aaaaaaabbaaaaaaaab"), false);
