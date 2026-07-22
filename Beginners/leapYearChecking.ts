//heck if the given year is leap year. A year is a leap year if it is divisible by 4, except for end-of-century years which must be divisible by 400. This means that the year 2000 was a leap year, although 1900 was not.

import { assertEqual } from "./util/assertEqual.ts";
function isLeapYear(year: number): boolean {
  // your code here
  if (year % 100 === 0) {
    return year % 400 === 0;
  } else {
    return year % 4 === 0;
  }
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
