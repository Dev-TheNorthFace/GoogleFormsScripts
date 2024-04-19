function onFormSubmit(e) {
    var responses = e.values;
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName("NAMEGOOGLESHEETS");
    sheet.appendRow(responses);
  }