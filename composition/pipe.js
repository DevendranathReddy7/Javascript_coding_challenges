function pipe(...fn) {
  return function (val) {
    return fn.reduce((acc, fn) => {
      return fn(acc);
    }, val);
  };
}

const add = (x) => x + 2;
const multiply = (x) => x * 3;
const subtract = (x) => x - 1;

const val = pipe(add, multiply, subtract)(5); // 20
console.log(val);
