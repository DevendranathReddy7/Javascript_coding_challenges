function secondLargest(nums) {
  let max = -Infinity;
  let secondMax = -Infinity;

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num < max && num > secondMax) {
      secondMax = num;
    }
  }

  return secondMax === -Infinity ? undefined : secondMax;
}

console.log(secondLargest([10, 5, 8, 10, 7])); // 8
console.log(secondLargest([4, 4, 4])); // undefined
console.log(secondLargest([5, 10, 8])); //
