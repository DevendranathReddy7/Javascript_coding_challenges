import { assertEqual } from "./util/assertEqual";
function isometricStrings(line1: string, line2: string): boolean {
  // your code here
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
