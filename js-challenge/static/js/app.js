var tableData = data;

// Creates table headers
  function createHeaders(table, tableData) {
    let tableheader = table.createTHead();
    let row = tableheader.insertRow();
    for (x of tableData) {
      let th = document.createElement("th");
      th.append(document.createTextNode(x));
      row.append(th);
    }
  }
  
// Generates table body
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (column in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[column]);
        cell.append(text);
      }
    }
  }
  
// Deletes table and creates new one based on search bar input
  function filterTable() {
    // Deletes old table
    var oldTable = document.getElementById("ufo-table");
    oldTable.innerHTML = "";
    // Sets variables
    var inputString = document.getElementById("datetime").value
    var ufoTable = document.getElementById("ufo-table")
    var headerData = Object.keys(tableData[0]);
    // Creates header again
    createHeaders(ufoTable, headerData);

    // Iterates through table (same as generateTable())
    for (let element of tableData) {
        // New condition to see if the datetime field of the data matches the input string
        if(element['datetime'] == inputString){
            let row = ufoTable.insertRow();
            for (key in element) {
                    let cell = row.insertCell();
                    let text = document.createTextNode(element[key]);
                    cell.append(text);
            }
        }
    }
}

// Calls above functions
  var ufoTable = document.getElementById("ufo-table")
  var headerData = Object.keys(tableData[0]);
  createHeaders(ufoTable, headerData);
  generateTable(ufoTable, tableData);