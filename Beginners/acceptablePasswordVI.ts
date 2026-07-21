import { assertEqual } from "./util/assertEqual";

function isAcceptablePassword(password: string): boolean {
  // your code here
  return false;
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
