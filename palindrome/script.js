const str1 = "racecar";
const str2 = "Racecar";
const str3 = "A man a plan a canal Panama";
const str4 = "12321";

const isPalindrome = (string) => {
  let fixedStrig = "";
  let reversedString = "";
  for (let i = 0; i < string.length; i++) {
    if (/[A-Za-z0-9]/.test(string[i])) {
      fixedStrig += string[i].toLowerCase();
    }
  }

  for (let i = fixedStrig.length - 1; i >= 0; i--) {
    reversedString += fixedStrig[i];
  }

  return reversedString === fixedStrig;
};

const palindrome = isPalindrome(str4);
console.log(palindrome);
