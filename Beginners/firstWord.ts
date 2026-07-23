//You might see a simplified version of this mission already First Word (simplified). This mission is a little bit more complex as not only English letters can be in the given string.

// You are given a string where you have to find its first word.

// When solving a task pay attention to the following points:

// There can be dots and commas in a string.
// A string can start with a letter or, for example, one/multiple dot(s) or space(s).
// A word can contain an apostrophe and it's a part of a word.
// The whole text can be represented with one word and that's it.

import { assertEqual } from "./util/assertEqual.ts";

function firstWord(text: string): string {
  // your code here
  let words = text.split(" ");
  let word = "";
  for (let i = 0; i < words.length; i++) {
    const candidate = words[i].replace(/^[^a-zA-Z']+|[^a-zA-Z']+$/g, "");
    if (/[a-zA-Z]/.test(candidate)) {
      word = candidate;
      break;
    }
  }
  return word;
}

console.log("Example:");
console.log(firstWord("Hello world"));

// These "asserts" are used for self-checking
assertEqual(firstWord("Hello world"), "Hello");
assertEqual(firstWord(" a word "), "a");
assertEqual(firstWord("don't touch it"), "don't");
assertEqual(firstWord("greetings, friends"), "greetings");
assertEqual(firstWord("... and so on ..."), "and");
assertEqual(firstWord("hi"), "hi");
