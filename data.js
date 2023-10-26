// ###################
// Sheet Information 
// ###################
// You may tweak the values here if questions or Spreadsheet changes

const spreadsheetId = "1WA3hyaWy-j
const pageName = "Form Responses 2"
const calendarId = "j"

// Copy and paste the question that provides the associated information
const eventName = "Name of event"
const purchaser = "Your Name"
const area = "Name of Area Council offering this submission"
const timestamp = "Timestamp"
const modified = "Last Modified"
const eventLink = "Calendar Link"
const eventStart = "What date and time will you be picking up the DBC from Kiefaber 461?"
const eventEnd = "What date and time do you expect to return the DBC to Kiefaber 461?"


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

const EVENT_NAME = index_map[eventName];
const PURCHASER = index_map[purchaser];
const AREA = index_map[area];
const TIMESTAMP = index_map[timestamp];
const MODIFIED = index_map[modified];
const EVENT_LINK = index_map[eventLink];
const EVENT_START = index_map[eventStart];
const EVENT_END = index_map[eventEnd];

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
