console.log(rotateRight([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

console.log(rotateRight([1, 2, 3], 1));
// [3, 1, 2]

// function rotateRight(arr, num) {
//   const n = arr.slice(arr.length - num, arr.length);
//   const p2 = arr.slice(0, arr.length - num);
//   return [...n, ...p2];
// }

//below will coer edge case where num is greter than length of array
function rotateRight(arr, num) {
  if (arr.length === 0) return [];

  const k = ((num % arr.length) + arr.length) % arr.length;

  const firstPart = arr.slice(arr.length - k);
  const secondPart = arr.slice(0, arr.length - k);

  return [...firstPart, ...secondPart];
}

console.log(rotateRight([1, 2, 3, 4, 5], 2));
// [4, 5, 1, 2, 3]

console.log(rotateRight([1, 2, 3], 1));
// [3, 1, 2]

console.log(rotateRight([1, 2, 3], 4));
// [3, 1, 2]
