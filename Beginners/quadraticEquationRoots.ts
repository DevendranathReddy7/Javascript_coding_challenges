import { assertEqual } from "./util/assertEqual";

function quadraticRoots(
  a: number,
  b: number,
  c: number,
): [number, number] | [string] {
  // your code here
  return [""];
}

console.log("Example:");
console.log(quadraticRoots(1, 2, 3));

// These "asserts" are used for self-checking
assert.deepStrictEqual(quadraticRoots(1, -3, 2), [2, 1]);
assert.deepStrictEqual(quadraticRoots(1, 0, -1), [1, -1]);
assert.deepStrictEqual(quadraticRoots(1, 2, 1), [-1, -1]);
assert.deepStrictEqual(quadraticRoots(1, 0, 1), ["No real roots"]);
assert.deepStrictEqual(quadraticRoots(1, 4, 4), [-2, -2]);
assert.deepStrictEqual(quadraticRoots(1, -5, 6), [3, 2]);
assert.deepStrictEqual(quadraticRoots(1, -6, 9), [3, 3]);
assert.deepStrictEqual(quadraticRoots(2, 2, 1), ["No real roots"]);
assert.deepStrictEqual(quadraticRoots(2, -7, 6), [2, 1.5]);
assert.deepStrictEqual(quadraticRoots(2, -3, 1), [1, 0.5]);
