function main() {
  const {HEADERS, data} = pullData(spreadsheetId, pageName);
  let rowIndex = 0;

  for (const entry of data){
    rowIndex++; 
    // Evaluate New Entries
    if (isNewEntry(entry)){
      createCalendarEntry();
      writeTimestamps();
      writeEventLink();
    }
    // Edit Modified Entries
    if (isModifiedEntry(entry)){
      modifyCalendarEntry();
      writeTimestamps();
    }
  } 
};
  

// Loop Helper Functions
function isNewEntry(entry){
    return getCellData(entry, header.EventLink) == ""
};

function isModifiedEntry(entry){
    const formTimestamp =  getCellData(entry, header.formTimestamp)
    const scriptTimestamp = getCellData(entry, header.scriptTimestamp)
    return (scriptTimestamp && formTimestamp !== scriptTimestamp)
};
