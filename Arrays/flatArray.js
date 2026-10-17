console.log(flattenArray([1, [2, [3, 4]], 5]));
// [1, 2, 3, 4, 5]

console.log(
  flattenArray([
    [1, 2],
    [3, [4]],
  ]),
);
// [1, 2, 3, 4]

function flattenArray(arr) {
  const newA = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "object") {
      newA.push(...flattenArray(arr[i]));
    } else {
      newA.push(arr[i]);
    }
  }
  return newA;
}
