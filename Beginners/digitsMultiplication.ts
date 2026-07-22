// You are given a positive number. Your function should calculate the product of the digits excluding any zeroes.

// For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

import { assertEqual } from "./util/assertEqual.ts";

function digitsMultip(data: number): number {
  // your code here
  const strNum = data.toString();
  let mult = 1;

  for (let i = 0; i < strNum.length; i++) {
    if (Number(strNum[i]) === 0) {
      continue;
    } else {
      mult *= Number(strNum[i]);
    }
  }
  return mult;
}

console.log("Example:");
console.log(digitsMultip(123405));

// These "asserts" are used for self-checking
assertEqual(digitsMultip(123405), 120);
assertEqual(digitsMultip(999), 729);
assertEqual(digitsMultip(1000), 1);
assertEqual(digitsMultip(1111), 1);
