console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4], 3));
// [[1, 2, 3], [4]]
// function chunkArray(arr, k) {
//   const newA = [];
//   for (let i = 0; i < arr.length; i = i + k) {
//     newA.push([arr[i], arr[i + k]]);
//   }
//   return newA;
// }

function chunkArray(arr, k) {
  if (k <= 0) {
    throw new Error("Chunk size must be greater than 0");
  }

  const result = [];

  for (let i = 0; i < arr.length; i += k) {
    result.push(arr.slice(i, i + k));
  }

  return result;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]

console.log(chunkArray([1, 2, 3, 4], 3));
// [[1, 2, 3], [4]]
