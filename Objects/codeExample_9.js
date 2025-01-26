const user = {
  name: "Dev",
  age: 25,
};

const flags = Object.getOwnPropertyDescriptor(user, "name");
console.log(flags);
