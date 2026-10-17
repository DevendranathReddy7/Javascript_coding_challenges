console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
// [2]

console.log(intersection([1, 3, 5], [2, 4, 6]));
// []

// function intersection(arr1, arr2) {
//   const set1 = [...new Set(arr1)];
//   const set2 = [...new Set(arr2)];
//   const newAr = [];
//   for (let i = 0; i < set1.length; i++) {
//     if (set2.includes(set1[i])) {
//       newAr.push(set1[i]);
//     }
//   }
//   return newAr;
// }

function intersection(arr1, arr2) {
  const set2 = new Set(arr2);
  const result = new Set();

  for (const num of arr1) {
    if (set2.has(num)) {
      result.add(num);
    }
  }

  return [...result];
}

console.log(intersection([1, 2, 2, 3], [2, 2, 4]));
// [2]
