//A quadratic equation is represented as ax2 + bx + c = 0. The general formula to find its roots (x-values for which y = 0) is:

// example

// This formula provides two roots: x1, x2. The value inside the square root, b2-4ac is known as the discriminant (D). Based on the value of the discriminant, a quadratic equation can have:
// two distinct real roots (D > 0);
// one real root (D = 0);
// no real roots (D < 0).
// Your code must return a tuple containing two values: the roots x1, x2, sorted descending. If there's only one real root, both values will be the same. If there are no real roots, the tuple should contain the string "No real roots".

import { assertDeepStrictEqual } from "./util/assertDeepStrictEqual.ts";

function quadraticRoots(
  a: number,
  b: number,
  c: number,
): [number, number] | [string] {
  const discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return ["No real roots"];
  }

  const denominator = 2 * a;

  if (discriminant === 0) {
    const root = -b / denominator;
    return [root, root];
  }

  const sqrtD = Math.sqrt(discriminant);
  const root1 = (-b + sqrtD) / denominator;
  const root2 = (-b - sqrtD) / denominator;

  return root1 >= root2 ? [root1, root2] : [root2, root1];
}

console.log("Example:");
console.log(quadraticRoots(1, 2, 3));

// These "asserts" are used for self-checking
assertDeepStrictEqual(quadraticRoots(1, -3, 2), [2, 1]);
assertDeepStrictEqual(quadraticRoots(1, 0, -1), [1, -1]);
assertDeepStrictEqual(quadraticRoots(1, 2, 1), [-1, -1]);
assertDeepStrictEqual(quadraticRoots(1, 0, 1), ["No real roots"]);
assertDeepStrictEqual(quadraticRoots(1, 4, 4), [-2, -2]);
assertDeepStrictEqual(quadraticRoots(1, -5, 6), [3, 2]);
assertDeepStrictEqual(quadraticRoots(1, -6, 9), [3, 3]);
assertDeepStrictEqual(quadraticRoots(2, 2, 1), ["No real roots"]);
assertDeepStrictEqual(quadraticRoots(2, -7, 6), [2, 1.5]);
assertDeepStrictEqual(quadraticRoots(2, -3, 1), [1, 0.5]);
