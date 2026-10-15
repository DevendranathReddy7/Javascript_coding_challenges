// Given a string that represents the column title as appears in an Excel sheet, return its corresponding column number.

// But how does the Excel column numbering actually work? Well, the column number is like decimal number, but with base (radix) 26 and "digits" A-Z.  Let's look at the exact numbers:

// Excel   Decimal
//     A   1
//    ..
//     Z   26
// The 1-"digit" numbers have ended. 2-"digits" numbers start from double first "digit" and go to double last one:

// Excel   Decimal
//     A   1
//    ..
//     Z   26
//    AA   27
//    ..
//    AZ   52
//    BA   53
//    ..
//    BZ   78
//    CA   79
//    ..
//    ..
//    ZZ   702
// Now it's turn for 3-"digit" numbers...

import { assertEqual } from "./util/assertEqual.ts";

function columnNumber(name: string): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(columnNumber("AA"));

// These "asserts" are used for self-checking
assertEqual(columnNumber("A"), 1);
assertEqual(columnNumber("Z"), 26);
assertEqual(columnNumber("AB"), 28);
assertEqual(columnNumber("ZY"), 701);
