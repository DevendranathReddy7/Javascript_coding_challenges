const numbers = [1, 2, 3, 4, 5];

function myFilter(nums, cb) {
  let newArr = [];
  for (let i = 0; i < nums.length; i++) {
    const isOk = cb(nums[i]);
    if (isOk) {
      newArr.push(nums[i]);
    }
  }
  return newArr;
}
const result = myFilter(numbers, (num) => num > 2);

console.log(result); // [3, 4, 5]
