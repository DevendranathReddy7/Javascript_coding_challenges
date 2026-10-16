console.log(firstUniqueChar("aabbcde")); // "c"
console.log(firstUniqueChar("aabb")); // null

function firstUniqueChar(str) {
  const counts = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    counts[char] = (counts[char] || 0) + 1;
  }
  for (let i = 0; i < str.length; i++) {
    if (counts[str[i]] === 1) {
      return str[i];
    }
  }

  return null;
}
