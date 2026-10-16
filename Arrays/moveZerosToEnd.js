console.log(moveZeros([0, 1, 0, 3, 12]));
function moveZeros(nums) {
  let newA = [];
  let newB = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      newA.push(nums[i]);
    } else {
      newB.push(nums[i]);
    }
  }

  return [...newB, ...newA];
}
