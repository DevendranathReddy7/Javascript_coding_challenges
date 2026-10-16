const numbers = [1, 2, 3, NaN];

function myIncludes(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val || (nums[i] !== nums[i] && val !== val)) {
      return true;
    }
  }
  return false;
}
console.log(myIncludes(numbers, 2)); // true
console.log(myIncludes(numbers, 5)); // false
console.log(myIncludes(numbers, NaN)); // true
