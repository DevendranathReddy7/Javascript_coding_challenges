function deepEqual(a, b) {
  // Same value or same reference
  if (Object.is(a, b)) {
    return true;
  }

  // If either value is null or not an object
  if (
    a === null ||
    b === null ||
    typeof a !== "object" ||
    typeof b !== "object"
  ) {
    return false;
  }

  // Objects must have the same number of own keys
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);

  if (keysA.length !== keysB.length) {
    return false;
  }

  // Compare each key and its value recursively
  for (const key of keysA) {
    if (!Object.hasOwn(b, key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
}

const obj1 = {
  name: "Asha",
  address: { city: "Hyderabad" },
};

const obj2 = {
  name: "Asha",
  address: { city: "Hyderabad" },
};

deepEqual(obj1, obj2);
