import { assertEqual } from "./util/assertEqual";

function fuzzyStringMatch(
  str1: string,
  str2: string,
  threshold: number,
): boolean {
  // your code here
  return false;
}

console.log("Example:");
console.log(fuzzyStringMatch("apple", "appel", 2));

// These "asserts" are used for self-checking
assertEqual(fuzzyStringMatch("apple", "appel", 2), true);
assertEqual(fuzzyStringMatch("apple", "bpple", 1), true);
assertEqual(fuzzyStringMatch("apple", "bpple", 0), false);
assertEqual(fuzzyStringMatch("apple", "apples", 1), true);
assertEqual(fuzzyStringMatch("apple", "bpples", 2), true);
assertEqual(fuzzyStringMatch("apple", "apxle", 1), true);
assertEqual(fuzzyStringMatch("apple", "pxxli", 3), false);
