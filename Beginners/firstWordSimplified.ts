// You are given a string and you have to find its first word.

// The input string consists of only English letters and spaces.
// There aren’t any spaces at the beginning and the end of the string.

import { assertEqual } from "./util/assertEqual.ts";

function firstWord(text: string): string {
  return text.split(" ")[0];
}

console.log("Example:");
console.log(firstWord("Hello world"));

// These "asserts" are used for self-checking
assertEqual(firstWord("Hello world"), "Hello");
assertEqual(firstWord("a word"), "a");
assertEqual(firstWord("greeting from CheckiO Planet"), "greeting");
assertEqual(firstWord("hi"), "hi");
