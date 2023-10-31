function createCalendarEntry(entry){
    const calendarEvent = CALENDAR.createEvent('', new Date(), new Date())
    setEventDetails(entry, calendarEvent);
    return calendarEvent
};

function modifyCalendarEntry(entry){
  const eventUrl = getCellData(entry, header.eventLink);
  const eventId = eventUrl.match(/eid=([^&]+)/)[1];
  const calendarEvent = CALENDAR.getEventById(eventId);
  setEventDetails(calendarEvent);
};

function generateEventDescription(entry){
    // Formnats the description for Gcal Event
    const cardUser = getCellData(entry, header.cardUser)
    const eventName = getCellData(entry, header.eventName)
    const eventDate = getCellData(entry, header.eventDate)
    const description = `<u><b>Information for the Receipt of Purchase</b></u>
<b>Card User:</b> ${cardUser}
<b>Event:</b> ${eventName}
<b>Event Date:</b> ${eventDate}`;
    return description
};

function setEventDetails(entry, calendarEvent){
    // Set Title
    const hallCouncil = getCellData(entry, header.hallCouncil)
    const eventName = "Tentatively Reserved by " + hallCouncil
    calendarEvent.setTitle(eventName);
    // Set Time
    const startDate = new Date(getCellData(entry, header.purchaseStart))
    const endDate = new Date(getCellData(entry, header.purchaseEnd))
    calendarEvent.setTime(startDate, endDate);
    // Set Location
    const location = getCellData(entry, header.purchaseLocation)
    calendarEvent.setLocation(location);
    // Set Description
    const description = generateEventDescription(entry)
    calendarEvent.setDescription(description);
};
