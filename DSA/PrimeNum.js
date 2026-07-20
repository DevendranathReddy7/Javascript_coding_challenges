const primeNum = (n) => {
  if (n < 2) {
    return "Not a Prime";
  }
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return "Not a Prime";
    } else {
      return "Prime";
    }
  }
};

console.log(primeNum(1));
console.log(primeNum(5));
console.log(primeNum(4));
//Big-o is O(n)--> Linear (as for loop runs 'n' times)

console.log("=================");
const primeNumOptimised = (n) => {
  if (n < 2) {
    return "Not a Prime";
  }
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return "Not a Prime";
    } else {
      return "Prime";
    }
  }
};

console.log(primeNumOptimised(1));
console.log(primeNumOptimised(5));
console.log(primeNumOptimised(4));
//Big-o is O(n)--> Linear (as for loop runs 'n' times) ❌

//Big-o is O(sqrt n)--> as n increses excetion also increases but not in same proportion ✅
