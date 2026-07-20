const nums = [2, 3, 9, 4, 10, 5, 7, 6, 1];

const findIndex = (n) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === n) {
      return i;
    }
  }
  return -1;
};

console.log(findIndex(3));
console.log(findIndex(5));
console.log(findIndex(7));
console.log(findIndex(11));

//Big-o is O(n)--> Linear (as for loop runs 'n' times)
