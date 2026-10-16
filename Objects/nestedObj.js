const user = {
  name: "Asha",
  address: {
    city: "Hyderabad",
    details: {
      pincode: 500001,
    },
  },
};

function getNestedValue(obj, path) {
  const parts = path.split(".");

  for (const key of parts) {
    if (obj == null) {
      return undefined;
    }

    obj = obj[key];
  }

  return obj;
}

console.log(getNestedValue(user, "address.details.pincode")); // 500001
console.log(getNestedValue(user, "address.city")); // "Hyderabad"
console.log(getNestedValue(user, "address.country")); //unefined
