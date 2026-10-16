const numbers = [5, 12, 8, 20];

function myFindIndex(nums, cb) {
  for (let i = 0; i < nums.length; i++) {
    if (cb(nums[i], i, nums)) {
      return i;
    }
  }
  return -1;
}
console.log(myFindIndex(numbers, (num) => num > 10));
// 1

console.log(myFindIndex(numbers, (num) => num > 50));
// -1
