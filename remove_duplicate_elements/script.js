let duplicateArray1 = [2, 3, 3, 1, 2, 4, 4, 5, 5];
let duplicateArray2 = [7, 7, 7, 7, 7];
let duplicateArray3 = [10, 20, 20, 10, 10, 20, 20];
let duplicateArray4 = [-10, -10, -20, -20, -30, -30, -20, -10];
let duplicateArray5 = [0, 1, 1, 2, 2, 3, 3, 0, 0];

const newArray = [];
const removeDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!newArray.includes(arr[i])) {
      newArray.push(arr[i]);
    }
  }
};
removeDuplicates(duplicateArray4);

console.log(newArray);
