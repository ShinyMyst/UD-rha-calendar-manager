// ###################
// Sheet Information 
// ###################
// You may tweak the values here if questions or Spreadsheet changes

const spreadsheetId = "1WA3hyaWy-PqwjDchFnd7wRAKnVbRhwHrBSLey8fItP0"
const pageName = "Form Responses 1"

// Copy and paste the question that provides the associated information
const questionRetreiveDate = "What date will you be picking up the DBC from Kiefaber 461?"
const questionRetrieveTime = "What time will you be picking up the DBC from Kiefaber 461?"
const questionReturnDate = "What date do you expect to return the DBC to Kiefaber 461?"
const questionReturnTime = "What time do you expect to return the DBC to Kiefaber 461?"
const questionEventName = "Name of event"
const questionPurchaser = "Your Name"
const questionArea = "Name of Area Council offering this submission"
const questionOriginalTimeStamp = "Timestamp"
const questionModifiedTimeStamp = "Last Modified"
const questionCalendarLink = "Calendar Link"

// ###################
// Automated Data Set-Up
// ###################
// This sets up the data for the script to use.  
// Do NOT touch information here unless you know what you're doing.

const activeSheet = SpreadsheetApp.openById(spreadsheetId);
const activePage = activeSheet.getSheetByName(pageName);

const DATA = activePage.getDataRange().getValues();
const INDEX_MAP = createHeaderToIndexMap()

// ###################
// Data Points
// ###################
// Using variable rather than the string directly to allow the portion editable
// by RHA member to be seperate from the functional code.
const modifiedTimeStamp = INDEX_MAP[questionModifiedTimeStamp]
const calendarLink = INDEX_MAP[questionCalendarLink]

// ###################
// Functions
// ###################
// ChatGPT Function
function createHeaderToIndexMap() {
  var headers = activePage.getRange(1, 1, 1, activePage.getLastColumn()).getValues()[0];
  var headerToIndex = {};

  for (var i = 0; i < headers.length; i++) {
    headerToIndex[headers[i]] = i + 1; // Add 1 to the index to make it 1-based.
  }

  return headerToIndex;
}
