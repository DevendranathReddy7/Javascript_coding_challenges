function myMap(nums, callback) {
  const newArr = [];

  for (let i = 0; i < nums.length; i++) {
    newArr.push(callback(nums[i], i, nums));
  }

  return newArr;
}

const numbers = [1, 2, 3];

console.log(myMap(numbers, (num) => num * 2));
// [2, 4, 6]

console.log(myMap(numbers, (num) => num * num));
// [1, 4, 9]
