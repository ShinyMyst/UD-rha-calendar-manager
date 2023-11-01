function writeTimestamps(rowIndex){
  // Updates the Timestamp and Last Modified columns to current date.
  const currentDate = new Date();
  const formattedDate = Utilities.formatDate(currentDate, 'GMT', 'MM/dd/yyyy HH:mm:ss');
  PAGE.getRange(rowIndex, getColumn(header.formTimestamp)).setValue(formattedDate);
  PAGE.getRange(rowIndex, getColumn(header.scriptTimestamp)).setValue(formattedDate);
};

function writeEventLink(rowIndex, event){
  // Updates the event URL column to given an event entity
  PAGE.getRange(rowIndex, getColumn(header.eventLink)).setValue(event.getId());
};
