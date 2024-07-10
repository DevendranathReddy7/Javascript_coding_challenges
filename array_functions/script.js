const arrayFunctions = () => {
  const funcArray = [];
  for (let i = 0; i < 4; i++) {
    funcArray.push(function () {
      console.log(`i am from function located at index: ${i}`);
    });
  }
  return funcArray;
};

const func = arrayFunctions();
func[2]();
