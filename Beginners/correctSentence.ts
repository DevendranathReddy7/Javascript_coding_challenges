import { assertEqual } from "./util/assertEqual";

function correctSentence(text: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(correctSentence("greetings, friends"));

// These "asserts" are used for self-checking
assertEqual(correctSentence("greetings, friends"), "Greetings, friends.");
assertEqual(correctSentence("Greetings, friends"), "Greetings, friends.");
assertEqual(correctSentence("Greetings, friends."), "Greetings, friends.");
assertEqual(correctSentence("greetings, friends."), "Greetings, friends.");
