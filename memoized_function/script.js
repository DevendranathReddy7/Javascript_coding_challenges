const storedValue = {};

const memoizedFunc = (a, b) => {
  let key = `${a}_${b}`;
  if (storedValue[key] === undefined) {
    console.log("result is fecthed from calculation");
    const result = a + b;
    storedValue[key] = result;
    return result;
  } else {
    console.log("result is fecthed from stored value");
    return storedValue[key];
  }
};

const sum1 = memoizedFunc(1, 2);
const sum2 = memoizedFunc(3, 2);
const sum3 = memoizedFunc(1, 2);

console.log(sum1, sum2, sum3);
