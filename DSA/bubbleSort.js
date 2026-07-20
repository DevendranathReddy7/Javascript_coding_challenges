const nums = [-6, 20, 8, -2, 4];

const bubbleSort = () => {
  //we are iterating till length -1 bcoz we don;t need to compare with last index
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] < nums[i + 1]) {
        continue;
      } else {
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
};
bubbleSort();
console.log(nums);
