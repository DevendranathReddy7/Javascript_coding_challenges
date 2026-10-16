const numbers = [10, 20, 30, 20];

function myIndexOf(nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      return i;
    }
  }
  return -1;
}
console.log(myIndexOf(numbers, 20)); // 1
console.log(myIndexOf(numbers, 50)); // -1
console.log(myIndexOf(numbers, NaN)); // -1
