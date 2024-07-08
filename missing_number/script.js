const testCases = [
  { input: [1, 2, 4, 5, 6], expected: 3 },
  { input: [2, 3, 4, 5, 6], expected: 1 },
  { input: [1, 2, 3, 4, 5], expected: 6 },
  { input: [], expected: 1 },
  { input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 11], expected: 10 },
];

const findNumber = (input) => {
  //n*(n+1)/2 sum of natuarl numbers
  const length = input.length + 1;
  const sumOfNaturalNumbers = (length * (length + 1)) / 2;
  const sumOfArrayElem = input.reduce((sum, num) => sum + num, 0);
  return sumOfNaturalNumbers - sumOfArrayElem;
};
const findMissingNumber = () => {
  testCases.map(({ input, expected }, index) => {
    const missingNumber = findNumber(input);

    console.log(index + 1, expected);
    console.log(missingNumber);
    console.log(missingNumber === expected ? "✅" : "❌");
    console.log("-----Test case end------");
  });
};

findMissingNumber();
