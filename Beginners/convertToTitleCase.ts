import { assertEqual } from "./util/assertEqual.ts";

function toTitleCase(sentence: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(toTitleCase("hello world"));

// These "asserts" are used for self-checking
assertEqual(toTitleCase("hello world"), "Hello World");
assertEqual(toTitleCase("openai gpt-4"), "Openai Gpt-4");
assertEqual(toTitleCase("this is a title"), "This Is A Title");
assertEqual(toTitleCase("THE QUICK BROWN FOX"), "The Quick Brown Fox");
assertEqual(toTitleCase("JUMPs ovER a LAZy dog"), "Jumps Over A Lazy Dog");
assertEqual(toTitleCase("typescript is great"), "Typescript Is Great");
assertEqual(toTitleCase("the answer is 42"), "The Answer Is 42");
assertEqual(toTitleCase("to be or not to be"), "To Be Or Not To Be");
assertEqual(toTitleCase("that is the question"), "That Is The Question");
assertEqual(toTitleCase(""), "");
