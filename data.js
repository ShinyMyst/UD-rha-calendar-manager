/*
function pullData(spreadsheetId, pageName) {
  // Splits headers from data and returns both. 
  const activeSheet = SpreadsheetApp.openById(spreadsheetId);
  const activePage = activeSheet.getSheetByName(pageName);
  const rawData = activePage.getDataRange().getValues();
  const headers = rawData[0]; 
  const splicedData = rawData.slice(1);
  return {headers, splicedData};
}; 
*/

function getColumn(headerString){
  // Finds the column number of a given header
  // Column A is 1 but index is 0, so add 1
    return TOP_ROW.indexOf(headerString)+1
  };
  
function getCellData(entry, headerString){
  // Finds the data associated with the given header for given entry (row)
      const cellIndex = TOP_ROW.indexOf(headerString);
      return entry[cellIndex]
};
