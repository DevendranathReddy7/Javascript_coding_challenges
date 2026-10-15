//This function should take a main string and a substring as inputs and return the number of occurrences of the substring within the main string. It should not be case-sensitive and may overlap.

import { assertEqual } from "./util/assertEqual.ts";
function countOccurrences(mainStr: string, subStr: string): number {
  const main = mainStr.toLowerCase();
  const sub = subStr.toLowerCase();
  let count = 0;

  for (let i = 0; i < sub.length; i++) {
    for (let j = 0; j < main.length; j++) {
      if (sub[i] === main[j]) {
      }
    }
  }
  // your code here
  return 0;
}

console.log("Example:");
console.log(countOccurrences("hello world hello", "hello"));

// These "asserts" are used for self-checking
assertEqual(countOccurrences("hello world hello", "hello"), 2);
assertEqual(countOccurrences("Hello World hello", "hello"), 2);
assertEqual(countOccurrences("hello", "world"), 0);
assertEqual(countOccurrences("hello world hello world hello", "world"), 2);
assertEqual(countOccurrences("HELLO", "hello"), 1);
assertEqual(countOccurrences("appleappleapple", "appleapple"), 2);
assertEqual(countOccurrences("HELLO WORLD", "WORLD"), 1);
assertEqual(countOccurrences("hello world hello", "o w"), 1);
assertEqual(countOccurrences("apple apple apple", "apple"), 3);
assertEqual(countOccurrences("apple Apple apple", "apple"), 3);
assertEqual(countOccurrences("apple", "APPLE"), 1);
