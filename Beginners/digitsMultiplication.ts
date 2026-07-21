import { assertEqual } from "./util/assertEqual";

function digitsMultip(data: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(digitsMultip(123405));

// These "asserts" are used for self-checking
assertEqual(digitsMultip(123405), 120);
assertEqual(digitsMultip(999), 729);
assertEqual(digitsMultip(1000), 1);
assertEqual(digitsMultip(1111), 1);
