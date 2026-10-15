const users = [
  { id: 1, name: "Asha" },
  { id: 2, name: "Rahul" },
  { id: 1, name: "Asha" },
  { id: 3, name: "Priya" },
  { id: 2, name: "Rahul" },
];

function uniqueBy(users, key) {
  const result = [];

  for (let i = 0; i < users.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < result.length; j++) {
      if (users[i][key] === result[j][key]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      result.push(users[i]);
    }
  }

  return result;
}

console.log(uniqueBy(users, "id"));

function uniqueBy(users, key) {
  const seen = new Set();

  return users.filter((user) => {
    if (seen.has(user[key])) {
      return false;
    }

    seen.add(user[key]);
    return true;
  });
}

console.log(uniqueBy(users, "id"));
