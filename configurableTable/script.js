const rowElm = document.querySelector(".row");
const ColumnElm = document.querySelector(".column");
const btnElm = document.querySelector(".table__button");
const tableContainer = document.querySelector(".table__container");

const createTable = (rows, cols) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const empthTh = document.createElement("th");
  tr.appendChild(empthTh);

  for (let col = 1; col <= cols; col++) {
    const th = document.createElement("th");
    th.textContent = `(col-${col})`;
    tr.appendChild(th);
  }

  table.appendChild(tr);

  for (let row = 1; row <= rows; row++) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.textContent = `(row-${row})`;
    tr.appendChild(th);
    for (let col = 1; col <= cols; col++) {
      const td = document.createElement("td");
      td.textContent = `(${row}-${col})`;
      tr.appendChild(td);
    }
    table.appendChild(tr);
  }
  tableContainer.appendChild(table);
};

btnElm.addEventListener("click", function () {
  let rowCount = rowElm.value;
  let coulmnCount = ColumnElm.value;
  createTable(rowCount, coulmnCount);
});
