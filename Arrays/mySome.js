const numbers = [1, 3, 5, 8];

function mySome(nums, cb) {
  for (let i = 0; i < nums.length; i++) {
    if (cb(nums[i], i, nums)) {
      return true;
    }
  }
  return false;
}
console.log(mySome(numbers, (num) => num % 2 === 0));
// true

console.log(mySome(numbers, (num) => num > 10));
// false
