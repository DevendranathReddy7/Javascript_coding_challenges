//In number theory, an Armstrong number (after Michael F. Armstrong) or narcissistic number in a given number base (10 for this mission) is a number that is the sum of its own digits each raised to the power of the number of digits. For example, 153 is an Armstrong number because 13 + 53 + 33 == 153.

import { assertEqual } from "./util/assertEqual.ts";

function isArmstrong(num: number): boolean {
  // your code here
  const strNum = num.toString();
  const leng = strNum.length;
  let sum = 0;
  for (let i = 0; i < leng; i++) {
    sum += Number(strNum[i]) ** leng;
  }

  return num === sum;
}

console.log("Example:");
console.log(isArmstrong(11));

// These "asserts" are used for self-checking
assertEqual(isArmstrong(153), true);
assertEqual(isArmstrong(370), true);
assertEqual(isArmstrong(947), false);
assertEqual(isArmstrong(371), true);
assertEqual(isArmstrong(407), true);
assertEqual(isArmstrong(163), false);
assertEqual(isArmstrong(100), false);
assertEqual(isArmstrong(8208), true);
assertEqual(isArmstrong(930), false);
assertEqual(isArmstrong(4), true);
