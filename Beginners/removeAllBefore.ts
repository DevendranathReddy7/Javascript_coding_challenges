// Not all of the elements are important. What you need to do here is to remove from the sequence all of the elements before the given one.

// example

// For the illustration we have a sequence [1, 2, 3, 4, 5] and we need to remove all elements that go before 3 - which are 1 and 2.

// We have two edge cases here: (1) if a cutting element cannot be found, then the sequence shoudn't be changed. (2) if the sequence is empty, then it should remain empty.

import { assertDeepStrictEqual } from "./util/assertDeepStrictEqual.ts";

function removeAllBefore(values: number[], b: number): number[] {
  // your code here
  if (!values.includes(b)) {
    return values;
  }
  if (values.length === 0) {
    return [];
  }
  let index = values.findIndex((x) => x === b);
  return values.splice(index);
}

console.log("Example:");
console.log(JSON.stringify(removeAllBefore([1, 2, 3, 4, 5], 3)));

// These "asserts" are used for self-checking
assertDeepStrictEqual(removeAllBefore([1, 2, 3, 4, 5], 3), [3, 4, 5]);
assertDeepStrictEqual(removeAllBefore([1, 1, 2, 2, 3, 3], 2), [2, 2, 3, 3]);
assertDeepStrictEqual(
  removeAllBefore([1, 1, 2, 4, 2, 3, 4], 2),
  [2, 4, 2, 3, 4],
);
assertDeepStrictEqual(removeAllBefore([1, 1, 5, 6, 7], 2), [1, 1, 5, 6, 7]);
assertDeepStrictEqual(removeAllBefore([], 0), []);
assertDeepStrictEqual(
  removeAllBefore([7, 7, 7, 7, 7, 7, 7, 7, 7], 7),
  [7, 7, 7, 7, 7, 7, 7, 7, 7],
);
