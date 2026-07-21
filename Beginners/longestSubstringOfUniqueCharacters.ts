import { assertEqual } from "./util/assertEqual.ts";

function longestSubstr(s: string): number {
  // your code here
  return 0;
}

console.log("Example:");
console.log(longestSubstr("abcabcbb"));

// These "asserts" are used for self-checking
assertEqual(longestSubstr("abcabcbb"), 3);
assertEqual(longestSubstr("bbbbb"), 1);
assertEqual(longestSubstr("pwwkew"), 3);
assertEqual(longestSubstr("abcdef"), 6);
assertEqual(longestSubstr(""), 0);
assertEqual(longestSubstr("au"), 2);
assertEqual(longestSubstr("dvdf"), 3);
