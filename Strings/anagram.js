//Two strings are anagrams if they contain the same characters with the same frequencies, regardless of order.

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const counts = new Map();

  for (const char of str1) {
    counts.set(char, (counts.get(char) || 0) + 1);
  }

  for (const char of str2) {
    if (!counts.has(char)) {
      return false;
    }

    counts.set(char, counts.get(char) - 1);

    if (counts.get(char) < 0) {
      return false;
    }
  }

  return true;
}

console.log(isAnagram("listen", "silent")); // true
console.log(isAnagram("hello", "world")); // false
console.log(isAnagram("aabb", "abab")); // true
console.log(isAnagram("aab", "abb")); // false
