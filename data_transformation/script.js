const data = [
  { id: 1, category: "A" },
  { id: 2, category: "B" },
  { id: 3, category: "A" },
  { id: 4, category: "C" },
];
// Output = { A: [{ id: 1, category: 'A' }, { id: 3, category: 'A' }], B: [{ id: 2, category: 'B' }], C: [{ id: 4, category: 'C' }] }

const transformData = (data, prop) => {
  const transformedData = {};
  for (let obj of data) {
    let key = obj[prop];

    if (!transformedData[key]) {
      transformedData[key] = [];
    }
    transformedData[key].push(obj);
  }
  return transformedData;
};

const result = transformData(data, "category");
console.log(result);
