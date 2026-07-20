//Binary search only works on Sorted Array

// if the target element is leesthan middle element then target will lies in left side else on right side

const nums = [-3, 4, 5, 7, 10, 15, 20];
const findIndex = (n) => {
  let leftIndex = 0;
  let rightIndex = nums.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (n === nums[middleIndex]) return middleIndex;

    if (n < nums[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

console.log(findIndex(5));
console.log(findIndex(7));
console.log(findIndex(1));
console.log(findIndex(15));
