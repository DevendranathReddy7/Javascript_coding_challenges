//determine if number is power of 2 or not?

const powerOf2 = (n) => {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(powerOf2(2));
console.log(powerOf2(3));
console.log(powerOf2(4));

//Big o - O(logn)--> as the n is increased by half

const powerOf2Optimised = (n) => {
  if (n < 1) {
    return false;
  }

  return (n & (n - 1)) === 0;
};

console.log(powerOf2Optimised(2));
console.log(powerOf2Optimised(3));
console.log(powerOf2Optimised(4));

//Big 0 --> O(1) -->constant
