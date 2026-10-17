console.log(longestWord("JavaScript is powerful"));
// "JavaScript"

console.log(longestWord("I love clean code"));
// "clean"

function longestWord(str) {
  const arr = str.split(" ");
  let max = -Infinity;
  let maxStr = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length;
      maxStr = arr[i];
    }
  }
  return maxStr;
}
