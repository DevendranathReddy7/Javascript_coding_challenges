console.log(unique([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]
// function unique(nums) {
//   const seen = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (!seen.includes(nums[i])) {
//       seen.push(nums[i]);
//     }
//   }
//   return seen;
// }

function unique(nums) {
  return [...new Set(nums)];
}

console.log(unique([1, 2, 2, 3, 1, 4]));
// [1, 2, 3, 4]

console.log(unique([NaN, NaN, 1]));
// [NaN, 1]
