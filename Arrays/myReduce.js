const numbers = [1, 2, 3, 4];

function myReduce(nums, cb, initialValue) {
  let result = initialValue;

  for (let i = 0; i < nums.length; i++) {
    result = cb(result, nums[i], i, nums);
  }

  return result;
}

const result = myReduce(
  numbers,
  (accumulator, current) => accumulator + current,
  0,
);

console.log(result); // 10
