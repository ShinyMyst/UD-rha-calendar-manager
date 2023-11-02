// Sheet and Calendar Information
const spreadsheetId = "g-g"
const sheetName = "Form Responses 2"
const calendarId = "g@group.calendar.google.com"
// const CAL_ID = "g@group.calendar.google.com"


// Required Header Information
const header = {
    eventLink: "Calendar Link",
    cardUser: "Your First and Last Name",
    eventName: "Name of event",
    eventDate: "Date and start time of the event",
    hallCouncil: "Name of Area Council offering this submission",
    purchaseStart: "What date and time will you be picking up the DBC from Kiefaber 461?",
    purchaseEnd: "What date and time do you expect to return the DBC to Kiefaber 461?",
    purchaseLocation: "What store are your purchasing from?",
    formTimestamp: "Timestamp",
    scriptTimestamp: "Script Timestamp"
};

// Retrieve Data
const CALENDAR = CalendarApp.getCalendarById(calendarId);
const activeSheet = SpreadsheetApp.openById(spreadsheetId);
const PAGE = activeSheet.getSheetByName(sheetName);

const rawData = PAGE.getDataRange().getValues();
const TOP_ROW = rawData[0]; 
const DATA = rawData.slice(1);
