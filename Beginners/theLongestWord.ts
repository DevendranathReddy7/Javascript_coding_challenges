import { assertEqual } from "./util/assertEqual.ts";

function longestWord(sentence: string): string {
  // your code here
  let words = sentence.split(" ");
  let longest = "";
  let leng = 0;

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > leng) {
      leng = words[i].length;
      longest = words[i];
    }
  }
  return longest;
}

console.log("Example:");
console.log(longestWord("hello world"));

// These "asserts" are used for self-checking
assertEqual(longestWord("hello world"), "hello");
assertEqual(longestWord("openai gpt-4"), "openai");
assertEqual(longestWord("this is a sentence"), "sentence");
assertEqual(longestWord("the quick brown fox"), "quick");
assertEqual(longestWord("jumped over the lazy dog"), "jumped");
assertEqual(longestWord("typescript is great"), "typescript");
assertEqual(longestWord("the answer is 42"), "answer");
assertEqual(longestWord("to be or not to be"), "not");
assertEqual(longestWord("that is the question"), "question");
assertEqual(longestWord(""), "");
assertEqual(longestWord(" "), "");
