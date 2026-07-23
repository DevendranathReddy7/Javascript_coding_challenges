//In a given sequence the first element should become the last one. An empty sequence or with only one element should stay the same.

import { assertDeepStrictEqual } from "./util/assertDeepStrictEqual.ts";

function replaceFirst(values: number[]): number[] {
  // your code here
  if (values.length < 2) return values;
  const first = values.shift();
  values.push(first);
  return values;
}

console.log("Example:");
console.log(JSON.stringify(replaceFirst([1, 2, 3, 4])));

// These "asserts" are used for self-checking
assertDeepStrictEqual(replaceFirst([1, 2, 3, 4]), [2, 3, 4, 1]);
assertDeepStrictEqual(replaceFirst([1]), [1]);
assertDeepStrictEqual(replaceFirst([]), []);
