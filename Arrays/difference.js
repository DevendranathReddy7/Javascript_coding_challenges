console.log(difference([1, 2, 3, 4], [2, 4]));
// [1, 3]

console.log(difference([1, 1, 2, 3], [2]));
// [1, 3]

function difference(a1, a2) {
  const set2 = new Set(a2);
  const newA = new Set();

  for (let i = 0; i < a1.length; i++) {
    if (!set2.has(a1[i])) {
      newA.add(a1[i]);
    }
  }
  return [...newA];
}
