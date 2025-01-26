const flags = Object.getOwnPropertyDescriptor(Math, "PI");
Object.defineProperty(Math, "PI", {
  writable: true,
});
console.log(flags);
