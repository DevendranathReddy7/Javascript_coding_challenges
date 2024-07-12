let array1 = [1, 2, 3];
let array2 = [5, 6, 7];
let array3 = [4, 5, 6, 7, 8];

const getSum = (arr1, arr2) => {
  const length = Math.max(arr1.length, arr2.length);
  const smallestArray = arr1.length >= arr2.length ? arr2 : arr1;
  const largestArray = arr1.length <= arr2.length ? arr2 : arr1;
  let resultArray = [];
  for (let i = 0; i < length; i++) {
    resultArray.push(
      (smallestArray[i] ? smallestArray[i] : 0) + largestArray[i]
    );
  }
  return resultArray;
};

const sum = getSum(array1, array3);
console.log(sum);
