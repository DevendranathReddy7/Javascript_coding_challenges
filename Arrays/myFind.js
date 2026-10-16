const numbers = [5, 12, 8, 20];

function myFind(nums, cb) {
  for (let i = 0; i < nums.length; i++) {
    if (cb(nums[i], i, nums)) {
      return nums[i];
    }
  }
}
console.log(myFind(numbers, (num) => num > 10));
// 12
