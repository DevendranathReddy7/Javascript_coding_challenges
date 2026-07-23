//Sort the integers in sequence in sequence. But the position of zeros should not be changed.

import { assertDeepStrictEqual } from "./util/assertDeepStrictEqual.ts";

function exceptZero(items: number[]): number[] {
  // your code here
  const nonZeroSorted: number[] = [];

  for (const value of items) {
    if (value === 0) {
      continue;
    }

    let insertAt = nonZeroSorted.length;

    while (insertAt > 0 && nonZeroSorted[insertAt - 1] > value) {
      insertAt -= 1;
    }

    nonZeroSorted.splice(insertAt, 0, value);
  }

  const result: number[] = [];
  let nonZeroIndex = 0;

  for (const value of items) {
    if (value === 0) {
      result.push(0);
    } else {
      result.push(nonZeroSorted[nonZeroIndex]);
      nonZeroIndex += 1;
    }
  }

  return result;
}

console.log("Example:");
console.log(JSON.stringify(exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7])));

// These "asserts" are used for self-checking
assertDeepStrictEqual(
  exceptZero([5, 3, 0, 0, 4, 1, 4, 0, 7]),
  [1, 3, 0, 0, 4, 4, 5, 0, 7],
);
assertDeepStrictEqual(exceptZero([0, 2, 3, 1, 0, 4, 5]), [0, 1, 2, 3, 0, 4, 5]);
assertDeepStrictEqual(exceptZero([0, 0, 0, 1, 0]), [0, 0, 0, 1, 0]);
assertDeepStrictEqual(exceptZero([4, 5, 3, 1, 1]), [1, 1, 3, 4, 5]);
assertDeepStrictEqual(exceptZero([0, 0]), [0, 0]);
