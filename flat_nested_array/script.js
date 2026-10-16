const nestedArray1 = [1, [2, [3, 4], 5], 6];
const nestedArray2 = [[1, 2, [3]], 4, [[5, 6], 7], 8];
const nestedArray3 = [1, [2, 3, [4, 5, [6, 7]], 8], 9];
const nestedArray4 = [[1, [2, [3, [4, [5]]]]], 6];
const nestedArray5 = [1, [2, [3, 4], [5, 6, [7, 8]]], [9, 10]];

// const flattenArray = [];
// const flatArray = (nestedArray) => {
//   for (let i = 0; i < nestedArray.length; i++) {
//     if (typeof nestedArray[i] === "number") {
//       flattenArray.push(nestedArray[i]);
//     } else {
//       flatArray(nestedArray[i]);
//     }
//   }
// };

function flattenArray(nestedArray) {
  const result = [];

  function flatten(array) {
    for (const item of array) {
      if (Array.isArray(item)) {
        flatten(item);
      } else {
        result.push(item);
      }
    }
  }

  flatten(nestedArray);
  return result;
}

const arr = [1, [2, [3, 4], 5], [6, 7]];

console.log(flattenArray(arr));
// [1, 2, 3, 4, 5, 6, 7]

flatArray(nestedArray1);
console.log(flattenArray);
