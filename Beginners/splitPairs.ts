//Split the string into pairs of two characters. If the string contains an odd number of characters, then the missing second character of the final pair should be replaced with an underscore ('_').

import { assertDeepStrictEqual } from "./util/assertDeepStrictEqual.ts";

function splitPairs(text: string): string[] {
  // your code here
  let upd = [];
  for (let i = 0; i < text.length; i += 2) {
    let str = text[i] + (text[i + 1] || "_");
    upd.push(str);
  }
  return upd;
}

console.log("Example:");
console.log(JSON.stringify(splitPairs("abcd")));

// These "asserts" are used for self-checking
assertDeepStrictEqual(splitPairs("abcd"), ["ab", "cd"]);
assertDeepStrictEqual(splitPairs("abc"), ["ab", "c_"]);
assertDeepStrictEqual(splitPairs("abcdf"), ["ab", "cd", "f_"]);
assertDeepStrictEqual(splitPairs("a"), ["a_"]);
assertDeepStrictEqual(splitPairs(""), []);
