function main() {
  var rowIndex = 2
  for (var rowData of DATA.slice(1)) {
    processNewEntry(rowData, rowIndex)
    processModifiedEntry(rowData, rowIndex)
    rowIndex += 1
  }
}

// ###################
// Primary Functions
// ###################
function processNewEntry(data, rowIndex) {
  // If calendar link is empty, create a new calendar entry
  // Updates timestamp, last modified, and event link columns
  if (data[EVENT_LINK] == "") {
    console.log("Adding new event to calendar.")
    // Create event in calendar
    const [eventStart, eventEnd] = getTimeframe(data)
    const event = CALENDAR.createEvent(data[EVENT_NAME], eventStart, eventEnd);
    addEventData(event)
    // Update spreadsheet
    writeTimestamps(ACTIVE_PAGE, rowIndex, TIMESTAMP+1, MODIFIED+1, );
    writeEventLink(event, ACTIVE_PAGE, rowIndex, EVENT_LINK+1);
  }
};

function processModifiedEntry(data, rowIndex) {
  // If timestamp does does not match last modified
  // Use the calendar link to retreive and edit event
  if (data[MODIFIED] && data[TIMESTAMP].getTime() !== data[MODIFIED].getTime()) { 
    modifyEventData(data[EVENT_LINK], data)
    writeTimestamps(ACTIVE_PAGE, rowIndex, TIMESTAMP+1, MODIFIED+1, );
  }
};

// ###################
// Data Retrieval 
// ###################
function getTimeframe(data) {
    // Find start and end date/time

    const startDate = new Date(data[EVENT_START]);
    const endDate = new Date(data[EVENT_END]);

    return [startDate, endDate]
}

// TODO - Remove global references from the lower level functions.
// ###################
// Adjust Calendar Entries
// ###################
function modifyEventData(eventUrl, data){
  // Given an event object, update the calendar entry with info from data.
  const eventId = eventUrl.match(/eid=([^&]+)/)[1];
  const event = CALENDAR.getEventById(eventId);
  event.setTitle(data[EVENT_NAME])
  event.setTime(...getTimeframe(data))
  addEventData(event)
};

function addEventData(event){
  // Given an event object, update all event data sans title and time.
}

// ###################
// Write to Spreadsheet
// ###################
function writeTimestamps(page, rowIndex, timestampIndex, modifiedIndex){
  // Updates the Timestamp and Last Modified columns to current date.
  var currentDate = new Date();
  var formattedDate = Utilities.formatDate(currentDate, 'GMT', 'MM/dd/yyyy HH:mm:ss');
  page.getRange(rowIndex, timestampIndex).setValue(formattedDate)
  page.getRange(rowIndex, modifiedIndex).setValue(formattedDate)
}

function writeEventLink(event, page, rowIndex, columnIndex){
  // Updates the event URL column to given event's URL
  var eventURL = `https://calendar.google.com/calendar/event?eid=${event.getId()}`;
  page.getRange(rowIndex, columnIndex).setValue(eventURL)
}

