import { assertEqual } from "./util/assertEqual.js";

function determineSign(num: number): string {
  return num > 0 ? "positive" : num === 0 ? "zero" : "negative";
}

console.log(determineSign(11));

// These "asserts" are used for self-checking
assertEqual(determineSign(5), "positive");
assertEqual(determineSign(0), "zero");
assertEqual(determineSign(-10), "negative");
assertEqual(determineSign(1), "positive");
assertEqual(determineSign(-1), "negative");
assertEqual(determineSign(999), "positive");
assertEqual(determineSign(-1000), "negative");
assertEqual(determineSign(123456789), "positive");
assertEqual(determineSign(-987654321), "negative");
assertEqual(determineSign(2), "positive");
