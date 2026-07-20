const nums = [-6, 20, 8, -2, 4];

const inserstion = () => {
  for (let i = 1; i < nums.length; i++) {
    for (let j = i; j > 0; j--) {
      if (nums[j] < nums[j - 1]) {
        let temp = nums[j];
        nums[j] = nums[j - 1];
        nums[j - 1] = temp;
      }
    }
  }
};
inserstion();
console.log(nums);
//Big(0)--O(n^2)
