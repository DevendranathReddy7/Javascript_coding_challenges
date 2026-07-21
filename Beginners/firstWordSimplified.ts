import { assertEqual } from "./util/assertEqual";

function firstWord(text: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(firstWord("Hello world"));

// These "asserts" are used for self-checking
assertEqual(firstWord("Hello world"), "Hello");
assertEqual(firstWord("a word"), "a");
assertEqual(firstWord("greeting from CheckiO Planet"), "greeting");
assertEqual(firstWord("hi"), "hi");
