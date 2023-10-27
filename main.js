function main() {
  let rowIndex = 0;

  for (const entry of DATA){
    rowIndex++; 
    // Evaluate New Entries
    if (isNewEntry(entry)){
      const event = createCalendarEntry();
      writeTimestamps(rowIndex);
      writeEventLink(rowIndex, event);
    }
    // Edit Modified Entries
    if (isModifiedEntry(entry)){
      modifyCalendarEntry(rowIndex);
      writeTimestamps(rowIndex);
    }
  } 
};
  

// Loop Validation
function isNewEntry(entry){
    return getCellData(entry, header.EventLink) == ""
};

function isModifiedEntry(entry){
    const formTimestamp =  getCellData(entry, header.formTimestamp)
    const scriptTimestamp = getCellData(entry, header.scriptTimestamp)
    return (scriptTimestamp && formTimestamp !== scriptTimestamp)
};
