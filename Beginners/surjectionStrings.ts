//Maybe it's a cipher? Maybe, but we don’t know for sure.
// Maybe you can call it "homomorphism"? I wish I knew this word before.

// You need to check that the string A is isometric to the string B. There exists a function that turns characters from A into characters in the same spot in B.

// Characters in A correspond to a unique character value in B. Characters in B are allowed to correspond to multiple character values in A.

import { assertEqual } from "./util/assertEqual.ts";
function isometricStrings(line1: string, line2: string): boolean {
  // your code here
  let obj = {};
  for (let i = 0; i < line1.length; i++) {}
  return false;
}

console.log("Example:");
console.log(isometricStrings("add", "egg"));

// These "asserts" are used for self-checking
assertEqual(isometricStrings("add", "egg"), true);
assertEqual(isometricStrings("foo", "bar"), false);
assertEqual(isometricStrings("bar", "foo"), true);
assertEqual(isometricStrings("", ""), true);
assertEqual(isometricStrings("all", "all"), true);
assertEqual(isometricStrings("gogopy", "doodle"), false);
assertEqual(isometricStrings("abba", "cccc"), true);
