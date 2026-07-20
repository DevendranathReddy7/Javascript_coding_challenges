const nums = [-6, 20, 8, -2, 4];
const quickSort = () => {
  const lastNum = nums[nums.length - 1];
  const leftArray = [];
  const rightArray = [];
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < lastNum) {
      leftArray.push(nums[i]);
    } else {
      rightArray.push(nums[i]);
    }
  }
  console.log(leftArray, rightArray);
};
quickSort();

console.log(nums);
