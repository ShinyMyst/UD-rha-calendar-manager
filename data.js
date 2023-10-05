// ###################
// Sheet Information 
// ###################
// You may tweak the values here if questions or Spreadsheet changes

const spreadsheetId = "1WA3hyaWRAKnVbRhwHrBSLey8fItP0"
const pageName = "Form Responses 1"
const calendarId = "c_a9ecb61fd391901406217a1abfead01b9f6b15cf6a08dd401d3f@group.calendar.google.com"

// Copy and paste the question that provides the associated information
const startDate = "What date will you be picking up the DBC from Kiefaber 461?"
const startTime = "What time will you be picking up the DBC from Kiefaber 461?"
const endDate = "What date do you expect to return the DBC to Kiefaber 461?"
const endTime = "What time do you expect to return the DBC to Kiefaber 461?"
const eventName = "Name of event"
const purchaser = "Your Name"
const area = "Name of Area Council offering this submission"
const timestamp = "Timestamp"
const modified = "Last Modified"
const eventLink = "Calendar Link"


// ###################
// Get Data & Calendar
// ###################
const activeSheet = SpreadsheetApp.openById(spreadsheetId);
const ACTIVE_PAGE = activeSheet.getSheetByName(pageName);

const DATA = ACTIVE_PAGE.getDataRange().getValues();
const CALENDAR = CalendarApp.getCalendarById(calendarId)

// ###################
// Data Indicies
// ###################
// Store the index of specific data points.
// Some redundancy using var instead of the text directly
// This is done to seperate the value that general users can tweak.
const index_map = createHeaderToIndexMap()

const START_DATE = index_map[startDate];
const START_TIME = index_map[startTime];
const END_DATE = index_map[endDate];
const END_TIME = index_map[endTime];
const EVENT_NAME = index_map[eventName];
const PURCHASER = index_map[purchaser];
const AREA = index_map[area];
const TIMESTAMP = index_map[timestamp];
const MODIFIED = index_map[modified];
const EVENT_LINK = index_map[eventLink];

// ###################
// Functions
// ###################
function createHeaderToIndexMap() {
  var headers = ACTIVE_PAGE.getRange(1, 1, 1, ACTIVE_PAGE.getLastColumn()).getValues()[0];
  var headerToIndex = {};

  for (var i = 0; i < headers.length; i++) {
    headerToIndex[headers[i]] = i
  }

  return headerToIndex;
}
