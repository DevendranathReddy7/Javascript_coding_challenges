import { assertEqual } from "./util/assertEqual.ts";
function countOccurrences(mainStr: string, subStr: string): number {
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
