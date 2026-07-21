//This function should take three strings as input: the main text, the target substring, and the replacement substring. It should return a new string where all occurrences of the target substring within the main text are replaced with the replacement substring.

import { assertEqual } from "./util/assertEqual.ts";

function replaceAll(mainText: string, target: string, repl: string): string {
  //return mainText.replaceAll(target, repl)\

  //OR
  if (target === "") {
    return mainText;
  }

  let result = "";
  let i = 0;

  while (i < mainText.length) {
    let isMatch = true;

    for (let j = 0; j < target.length; j += 1) {
      if (mainText[i + j] !== target[j]) {
        isMatch = false;
        break;
      }
    }

    if (isMatch && i + target.length <= mainText.length) {
      result += repl;
      i += target.length;
    } else {
      result += mainText[i];
      i += 1;
    }
  }

  return result;
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
