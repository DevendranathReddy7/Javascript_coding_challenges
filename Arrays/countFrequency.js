console.log(countFrequency([1, 2, 2, 3, 1, 1]));
// { 1: 3, 2: 2, 3: 1 }

function countFrequency(nums) {
  const obj = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (obj.has(nums[i])) {
      obj.set(nums[i], obj.get(nums[i]) + 1);
    } else {
      obj.set(nums[i], 1);
    }
  }
  return obj;
}
