const numbers = [1, 2, 3, 4, 5, 6];

// function groupByReduce(list) {
//   const newObj = {
//     even: [],
//     odd: [],
//   };

//   list.reduce(
//     (acc, val) =>
//       val % 2 === 0 ? newObj.even.push(val) : newObj.odd.push(val),
//     numbers[0],
//   );
//   return newObj;
// }

function groupByReduce(numbers) {
  return numbers.reduce(
    (acc, num) => {
      if (num % 2 === 0) {
        acc.even.push(num);
      } else {
        acc.odd.push(num);
      }

      return acc;
    },
    { even: [], odd: [] },
  );
}

console.log(groupByReduce([1, 2, 3, 4, 5, 6]));
console.log(groupByReduce(numbers));
