// Sheet and Calendar Information
const spreadsheetId = "1WA3hyaWy-PqwjDchFnd7wRAKnVbRhwHrBSLey8fItP0"
const sheetName = "Form Responses 2"
const calendarId = "c_a9ecb61fd391901406217a1abf70f4d439d1feead01b9f6b15cf6a08dd401d3f@group.calendar.google.com"

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
