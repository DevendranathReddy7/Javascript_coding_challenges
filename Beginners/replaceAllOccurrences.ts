import { assertEqual } from "./util/assertEqual";

function replaceAll(mainText: string, target: string, repl: string): string {
  // your code here
  return "";
}

console.log("Example:");
console.log(replaceAll("hello world", "world", "TypeScript"));

// These "asserts" are used for self-checking
assertEqual(
  replaceAll("hello world", "world", "TypeScript"),
  "hello TypeScript",
);
assertEqual(
  replaceAll("hello world world", "world", "TypeScript"),
  "hello TypeScript TypeScript",
);
assertEqual(
  replaceAll("TypeScript is fun", "fun", "awesome"),
  "TypeScript is awesome",
);
assertEqual(replaceAll("aaa", "a", "b"), "bbb");
assertEqual(
  replaceAll("replace all the all", "all", "some"),
  "replace some the some",
);
assertEqual(
  replaceAll("nothing to replace", "something", "nothing"),
  "nothing to replace",
);
assertEqual(replaceAll("same same same", "same", "same"), "same same same");
assertEqual(replaceAll("123 123", "123", "321"), "321 321");
assertEqual(replaceAll("OpenAI", "AI", "Source"), "OpenSource");
assertEqual(replaceAll("", "anything", "nothing"), "");
