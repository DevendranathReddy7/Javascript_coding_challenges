let array1 = [1, 2, 3, 4, 5];
let array2 = [1, 2, 3, 4, 5, 5];
let array3 = [-10, -20, -30, -40, -50];

let firstNum = -Infinity;
let secondNum = -Infinity;

const secondLargestNumber = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] > firstNum) {
      secondNum = firstNum;
      firstNum = array[i];
      // assigne 2nd num value
    }
    if (array[i] > secondNum && array[i] < firstNum) {
      secondNum = array[i];
    }
  }
};

secondLargestNumber(array3);
console.log(firstNum, secondNum);
