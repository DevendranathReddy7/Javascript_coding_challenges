import { assertEqual } from "./util/assertEqual";

function nonEmptyLines(text: string): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(nonEmptyLines("one simple line\n"));

// These "asserts" are used for self-checking
assertEqual(nonEmptyLines("one simple line\n"), 1);
assertEqual(nonEmptyLines(""), 0);
assertEqual(nonEmptyLines("\nonly one line\n            "), 1);
assertEqual(
  nonEmptyLines(
    "\nLorem ipsum dolor sit amet,\n\nconsectetur adipiscing elit\nNam odio nisi, aliquam\n            ",
  ),
  3,
);
