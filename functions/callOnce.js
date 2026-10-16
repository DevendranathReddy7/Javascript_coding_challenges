function once(fn) {
  let called = false;
  let result;

  return function (...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

function greet(name) {
  console.log("Hello", name);
  return `Greeted ${name}`;
}

const greetOnce = once(greet);

greetOnce("Asha"); // Logs: Hello Asha
greetOnce("Rahul"); // Does not execute again

console.log(greetOnce("Priya")); // "Greeted Asha"
