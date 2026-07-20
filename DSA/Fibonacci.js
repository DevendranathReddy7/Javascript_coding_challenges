const getFibonacciNums = (n) => {
  let nums = [0, 1];
  for (let i = 2; i <= n; i++) {
    nums.push(nums[i - 1] + nums[i - 2]);
  }
  return nums;
};

console.log(getFibonacciNums(0));
console.log(getFibonacciNums(6));
console.log(getFibonacciNums(7));

//Big-o is O(n)--> Linear (as for loop runs 'n' times)
