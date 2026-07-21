//Check if a given string has all symbols in upper case. If the string is empty or doesn't have any letter in it - function should return true.
import { assertEqual } from "./util/assertEqual.ts";

function isAllUpper(text: string): boolean {
  // Valid if there are no lowercase letters anywhere in the string.
  return !/[a-z]/.test(text);

  //or
  //return text === text.toUpperCase();
}

console.log("Example:");
console.log(isAllUpper("ALL UPPER"));

// These "asserts" are used for self-checking
assertEqual(isAllUpper("ALL UPPER"), true);
assertEqual(isAllUpper("all lower"), false);
assertEqual(isAllUpper("mixed UPPER and lower"), false);
assertEqual(isAllUpper(""), true);
assertEqual(isAllUpper("444"), true);
assertEqual(isAllUpper("55 55 5 "), true);
