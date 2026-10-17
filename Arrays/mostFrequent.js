// function mostFrequent(nums) {
//   const map = new Map();
//   let max = -Infinity;
//   let val;
//   for (let i = 0; i < nums.length; i++) {
//     if (map.has(nums[i])) {
//       map.set(nums[i], map.get(nums[i]) + 1);
//     } else {
//       map.set(nums[i], 1);
//     }
//   }
//   for (const [key, value] of map.entries()) {
//     if (value > max) {
//       max = value;
//       val = key;
//     }
//   }
//   return val;
// }

function mostFrequent(nums) {
  const map = new Map();
  let max = -Infinity;
  let val;

  for (const num of nums) {
    map.set(num, (map.get(num) ?? 0) + 1);
  }

  for (const [key, value] of map.entries()) {
    if (value > max) {
      max = value;
      val = key;
    }
  }

  return val;
}

console.log(mostFrequent([1, 2, 2, 3, 2, 1])); // 2
console.log(mostFrequent([5, 5, 1, 1])); // 5
