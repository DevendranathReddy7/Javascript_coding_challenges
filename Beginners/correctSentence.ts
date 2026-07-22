//For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

// Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.
import { assertEqual } from "./util/assertEqual.ts";

function correctSentence(text: string): string {
  if (text.length === 0) {
    return ".";
  }

  let updated = "";

  for (let i = 0; i < text.length; i++) {
    if (i === 0) {
      updated += text[i].toUpperCase();
    } else {
      updated += text[i];
    }
  }

  if (text[text.length - 1] !== ".") {
    updated += ".";
  }

  return updated;
}

console.log("Example:");
console.log(correctSentence("greetings, friends"));

// These "asserts" are used for self-checking
assertEqual(correctSentence("greetings, friends"), "Greetings, friends.");
assertEqual(correctSentence("Greetings, friends"), "Greetings, friends.");
assertEqual(correctSentence("Greetings, friends."), "Greetings, friends.");
assertEqual(correctSentence("greetings, friends."), "Greetings, friends.");
