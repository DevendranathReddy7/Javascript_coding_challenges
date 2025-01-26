"use strict";
const user = {
  name: "Dev",
  age: 25,
  panNo: "FJBP*****P",
};

const flags = Object.getOwnPropertyDescriptor(user, "name");
Object.defineProperty(user, "name", {
  configurable: false,
});

delete user.name;
console.log(user);
