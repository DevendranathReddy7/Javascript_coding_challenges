function compose(...fns) {
  return function (value) {
    return fns.reduceRight((acc, fn) => {
      return fn(acc);
    }, value);
  };
}

const add = (x) => x + 2;
const multiply = (x) => x * 3;
const subtract = (x) => x - 1;

const result = compose(subtract, multiply, add)(5);

console.log(result); // 20
