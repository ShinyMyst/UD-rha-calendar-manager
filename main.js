function main() {
  var rowIndex = 2
  for (var rowData of DATA.slice(1)) {
    createEntry(rowData, rowIndex)
    modifyEntry(rowData)
    rowIndex += 1
  }
}


function createEntry(data, rowIndex) {
  // If calendar link is empty, create a new calendar entry
  // Write to last modified and calendar link
  if (data[EVENT_LINK] == "") {
    console.log("Making an entry")
    // Prep Date
    const startDate = new Date(data[START_DATE]);
    const endDate = new Date(data[END_DATE]);
    const startTime = data[START_TIME];
    const endTime = data[END_TIME];

    startDate.setHours(startTime.getHours(), startTime.getMinutes());
    endDate.setHours(endTime.getHours(), endTime.getMinutes());

    const event = CALENDAR.createEvent(
      data[EVENT_NAME],
      startDate,
      endDate,
      );
    const eventId = event.getId();
    const eventURL = `https://calendar.google.com/calendar/event?eid=${eventId}`;

    ACTIVE_PAGE.getRange(rowIndex, EVENT_LINK+1).setValue(eventURL)
    updateTimestamps(rowIndex)


  }
}

function modifyEntry(data) {
  // If last modified does not match modified
  // Use the calendar link to retreive and edit event
  if (data[TIMESTAMP].getTime() !== data[MODIFIED].getTime()) {
    console.log("Modify")
  } 
}

function updateEvent(eventUrl){
  const eventId = getEventIdFromUrl(eventUrl);
  // What to do if event not found?
  const event = CALENDAR.getEventById(eventId);

};

function getEventIdFromUrl(url) {
  const match = url.match(/eid=([^&]+)/);
  return match ? match[1] : null;
}


function updateTimestamps(rowIndex){
  var currentDate = new Date();
  var formattedDate = Utilities.formatDate(currentDate, 'GMT', 'MM/dd/yyyy HH:mm:ss');
  ACTIVE_PAGE.getRange(rowIndex, MODIFIED+1).setValue(formattedDate)
  ACTIVE_PAGE.getRange(rowIndex, TIMESTAMP+1).setValue(formattedDate)
}

