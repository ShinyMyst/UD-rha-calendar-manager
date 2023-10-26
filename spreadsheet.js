writeTimestamps(rowIndex){
    // Updates the Timestamp and Last Modified columns to current date.
  const currentDate = new Date();
  const formattedDate = Utilities.formatDate(currentDate, 'GMT', 'MM/dd/yyyy HH:mm:ss');
  PAGE.getRange(rowIndex, getColumn(header.formTimestamp)).setValue(formattedDate);
  PAGE.getRange(rowIndex, getColumn(header.scriptTimestamp)).setValue(formattedDate);
};


function writeEventLink(event, rowIndex){
  // Updates the event URL column to given event's URL
  var eventURL = `https://calendar.google.com/calendar/event?eid=${event.getId()}`;
  PAGE.getRange(rowIndex, columnIndex).setValue(eventURL);
};