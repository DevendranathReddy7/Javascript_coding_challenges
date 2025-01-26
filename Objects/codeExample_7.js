const user = {
  name: "Dev",
  age: 25,
  panNo: "FJBP*****P",
};

const flags = Object.getOwnPropertyDescriptor(user, "panNo");
Object.defineProperty(user, "panNo", {
  enumerable: false,
});

for (let key in user) {
  console.log(key, user[key]);
}
