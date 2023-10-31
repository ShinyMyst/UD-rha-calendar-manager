function main() {
  let rowIndex = 1;

  for (const entry of DATA){
    rowIndex++; 
    // Evaluate New Entries
    console.log("NEW?")
    if (isNewEntry(entry)){
      console.log("YES NEW")
      const event = createCalendarEntry(entry);
      writeTimestamps(rowIndex);
      writeEventLink(rowIndex, event);
    }
    // Edit Modified Entries
    console.log("MODIFIED?")
    if (isModifiedEntry(entry)){
      console.log("YES MOD")
      modifyCalendarEntry(rowIndex);
      writeTimestamps(rowIndex);
    }
  } 
};
  

// Loop Validation
function isNewEntry(entry){
    return getCellData(entry, header.eventLink) == ""
};

function isModifiedEntry(entry){
    const formTimestamp =  getCellData(entry, header.formTimestamp)
    const scriptTimestamp = getCellData(entry, header.scriptTimestamp)
    return (scriptTimestamp && formTimestamp !== scriptTimestamp)
};
