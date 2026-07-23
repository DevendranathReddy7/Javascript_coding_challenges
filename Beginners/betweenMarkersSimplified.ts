//You are given a string and two markers (the initial one and final). You have to find a substring enclosed between these two markers. But there are a few important conditions.

// The initial and final markers are always different.
// The initial and final markers are always 1 char size.
// The initial and final markers always exist in a string and go one after another.
import { assertEqual } from "./util/assertEqual.ts";

function betweenMarkers(text: string, start: string, end: string): string {
  // your code here
  let startIndex = 0;
  let endInex = 0;
  for (let i = 0; i < text.length; i++) {
    if (text[i] === start) {
      startIndex = i;
    } else if (text[i] === end) {
      endInex = i;
    }
  }
  return text.substring(startIndex + 1, endInex);
}

console.log("Example:");
console.log(betweenMarkers("What is >apple<", ">", "<"));

// These "asserts" are used for self-checking
assertEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assertEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assertEqual(betweenMarkers("What is ><", ">", "<"), "");
assertEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");
