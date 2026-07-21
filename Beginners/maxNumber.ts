import { assertEqual } from "./util/assertEqual";

function maxOfThree(a: number, b: number, c: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(maxOfThree(1, 2, 3));

// These "asserts" are used for self-checking
assertEqual(maxOfThree(1, 2, 3), 3);
assertEqual(maxOfThree(3, 2, 1), 3);
assertEqual(maxOfThree(1, 3, 2), 3);
assertEqual(maxOfThree(0, 0, 0), 0);
assertEqual(maxOfThree(-1, -2, -3), -1);
assertEqual(maxOfThree(5, 5, 4), 5);
assertEqual(maxOfThree(-5, -5, -6), -5);
assertEqual(maxOfThree(10, 9, 10), 10);
assertEqual(maxOfThree(123, 456, 789), 789);
assertEqual(maxOfThree(789, 123, 456), 789);
