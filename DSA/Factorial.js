const Factorial = (n) => {
  let val = 1;
  if (n < 0) {
    return "in Valid";
  }
  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = 1; i <= n; i++) {
    val = val * i;
  }
  return val;
};

console.log(Factorial(0));
console.log(Factorial(3));
console.log(Factorial(5));
console.log(Factorial(7));

//Big-o is O(n)--> Linear (as for loop runs 'n' times)
