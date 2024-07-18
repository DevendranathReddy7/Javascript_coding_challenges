const filterTableRow = () => {
  const inputValue = document.getElementById("searchInput").value.toLowerCase();
  const table = document.getElementById("dataTable");
  const rows = table.getElementsByTagName("tr");

  for (let i = 1; i <= rows.length; i++) {
    const cell = rows[i].getElementsByTagName("td");
    let match = false;
    for (let j = 0; j < cell.length; j++) {
      const cellContent = cell[j].textContent.toLowerCase();
      if (cellContent.includes(inputValue)) {
        match = true;
        break;
      }
    }
    rows[i].style.display = match ? "" : "none";
  }
};
