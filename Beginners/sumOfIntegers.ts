import { assertEqual } from "./util/assertEqual.ts";
function sumUptoN(N: number): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(sumUptoN(11));

// These "asserts" are used for self-checking
assertEqual(sumUptoN(1), 1);
assertEqual(sumUptoN(2), 3);
assertEqual(sumUptoN(3), 6);
assertEqual(sumUptoN(4), 10);
assertEqual(sumUptoN(5), 15);
assertEqual(sumUptoN(10), 55);
assertEqual(sumUptoN(20), 210);
assertEqual(sumUptoN(100), 5050);
assertEqual(sumUptoN(200), 20100);
assertEqual(sumUptoN(500), 125250);
