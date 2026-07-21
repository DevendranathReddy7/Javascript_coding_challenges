import { assertEqual } from "./util/assertEqual.ts";
function longestPrefix(arr: string[]): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(JSON.stringify(longestPrefix(["flower", "flow", "flight"])));

// These "asserts" are used for self-checking
assertEqual(longestPrefix(["flower", "flow", "flight"]), "fl");
assertEqual(longestPrefix(["dog", "racecar", "car"]), "");
assertEqual(longestPrefix(["apple", "application", "appetizer"]), "app");
assertEqual(longestPrefix(["a"]), "a");
assertEqual(longestPrefix(["", "b"]), "");
assertEqual(longestPrefix(["same", "same", "same"]), "same");
assertEqual(longestPrefix(["mismatch", "mister", "miss"]), "mis");
assertEqual(longestPrefix(["alphabet", "alpha", "alphadog"]), "alpha");
assertEqual(longestPrefix(["book", "boot", "booster"]), "boo");
assertEqual(longestPrefix(["short", "shore", "shot"]), "sho");
