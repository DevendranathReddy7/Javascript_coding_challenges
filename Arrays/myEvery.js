const numbers = [2, 4, 6, 8];

function myEvery(nums, cb) {
  for (let i = 0; i < nums.length; i++) {
    if (!cb(nums[i], i, nums)) {
      return false;
    }
  }

  return true;
}

console.log(myEvery(numbers, (num) => num % 2 === 0));
// true

console.log(myEvery(numbers, (num) => num > 5));
// false
