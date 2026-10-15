function groupBy(data, key) {
  const result = {};

  for (const item of data) {
    const group = item[key];

    if (!Object.hasOwn(result, group)) {
      result[group] = [];
    }

    result[group].push(item);
  }

  return result;
}

const employees = [
  { name: "Asha", department: "Engineering" },
  { name: "Rahul", department: "HR" },
  { name: "Priya", department: "Engineering" },
  { name: "Vikram", department: "HR" },
];

const grouped = groupBy(employees, "department");
console.log(grouped);
