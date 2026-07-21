import { assertEqual } from "./util/assertEqual";

function betweenMarkers(text: string, start: string, end: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(betweenMarkers("What is >apple<", ">", "<"));

// These "asserts" are used for self-checking
assertEqual(betweenMarkers("What is >apple<", ">", "<"), "apple");
assertEqual(betweenMarkers("What is [apple]", "[", "]"), "apple");
assertEqual(betweenMarkers("What is ><", ">", "<"), "");
assertEqual(betweenMarkers("[an apple]", "[", "]"), "an apple");
