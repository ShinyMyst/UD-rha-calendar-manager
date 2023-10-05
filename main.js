function main() {
  for (var row of DATA.slice(1)) {
    createEntry(row)
    modifyEntry(row)
  }
}


function createEntry(row) {
  // If calendar link is empty, create a new calendar entry
  // Write to last modified and calendar link
  if (row[EVENT_LINK] == "") {
    console.log("Making an entry")
    // Prep Date
    const startDate = new Date(row[START_DATE]);
    const endDate = new Date(row[END_DATE]);
    const startTime = row[START_TIME];
    const endTime = row[END_TIME];

    console.log(startDate)
    console.log(endDate)
    console.log(startTime)
    console.log(endTime)


    startDate.setHours(startTime.getHours(), startTime.getMinutes());
    endDate.setHours(endTime.getHours(), endTime.getMinutes());

    console.log(startDate)
    console.log(endDate)

    const event = CALENDAR.createEvent({
      title: row[EVENT_NAME],
      start: startDate,
      end: endDate,
      });
  }
}

function modifyEntry(row) {
  // If last modified does not match modified
  // Use the calendar link to retreive and edit event
  if (row[TIMESTAMP] !== row[MODIFIED]) {
    console.log("Modify")
  } 
}

//
function createCalendarEntry(row){

}

function modifyCalendarEntry(row){
  
}
