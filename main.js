function main() {
  let rowIndex = 1;

  for (const entry of DATA){
    rowIndex++; 
    // Evaluate New Entries
    if (isNewEntry(entry)){
      console.log("NEW")
      const event = createCalendarEntry(entry);
      writeTimestamps(rowIndex);
      writeEventLink(rowIndex, event);
    }
    // Edit Modified Entries
    if (isModifiedEntry(entry)){
      console.log("MOD")
      modifyCalendarEntry(entry);
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
    return formTimestamp.getTime() !== scriptTimestamp.getTime();
};

//TODO - Event link is actually now Event ID.  References to this need corrected.
