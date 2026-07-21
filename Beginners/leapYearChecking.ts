import { assertEqual } from "./util/assertEqual";
function isLeapYear(year: number): boolean {
  // your code here
  return false;
}

console.log("Example:");
console.log(isLeapYear(1891));

// These "asserts" are used for self-checking
assertEqual(isLeapYear(2000), true);
assertEqual(isLeapYear(1900), false);
assertEqual(isLeapYear(2004), true);
assertEqual(isLeapYear(2100), false);
assertEqual(isLeapYear(2020), true);
assertEqual(isLeapYear(2021), false);
assertEqual(isLeapYear(1600), true);
assertEqual(isLeapYear(1700), false);
assertEqual(isLeapYear(1800), false);
assertEqual(isLeapYear(2400), true);
