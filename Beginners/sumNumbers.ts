//In a given text you need to sum the numbers while excluding any digits that form part of a word.

// The text consists of numbers, spaces and letters from the English alphabet.
import { assertEqual } from "./util/assertEqual.ts";

function sumNumbers(text: string): number {
  // your code here
  let words = text.split(" ");
  let sum = 0;
  for (let i = 0; i < words.length; i++) {
    if (/[0-9]$/.test(words[i])) {
      sum += Number(words[i]);
    }
  }
  return sum;
}

console.log("Example:");
console.log(sumNumbers("hi"));

// These "asserts" are used for self-checking
assertEqual(sumNumbers("hi"), 0);
assertEqual(sumNumbers("who is 1st here"), 0);
assertEqual(sumNumbers("my numbers is 2"), 2);
assertEqual(
  sumNumbers(
    "This picture is an oil on canvas painting by Danish artist Anna Petersen between 1845 and 1910 year",
  ),
  3755,
);
assertEqual(sumNumbers("5 plus 6 is"), 11);
assertEqual(sumNumbers(""), 0);
