"use strict";
const user = {
  name: "Dev",
  age: 25,
};
const flags = Object.getOwnPropertyDescriptor(user, "name");
Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "ravi";
console.log(user);
