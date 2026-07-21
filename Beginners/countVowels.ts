import { assertEqual } from "./util/assertEqual.ts";

const VOWELS = ["a", "e", "i", "o", "u"];

function countVowels(text: string): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(countVowels("Hello"));

// These "asserts" are used for self-checking
assertEqual(countVowels("hello"), 2);
assertEqual(countVowels("openai"), 4);
assertEqual(countVowels("typescript"), 2);
assertEqual(countVowels("a"), 1);
assertEqual(countVowels("b"), 0);
assertEqual(countVowels("aeiou"), 5);
assertEqual(countVowels("AEIOU"), 5);
assertEqual(countVowels("The quick brown fox"), 5);
assertEqual(countVowels("Jumps over the lazy dog"), 6);
assertEqual(countVowels(""), 0);
