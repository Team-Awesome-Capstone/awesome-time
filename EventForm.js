// Set Global variables so they be used throughout the whole code
//without having to recreate them for each function
const ss = SpreadsheetApp.getActiveSpreadsheet()

const formWS = ss.getSheetByName("Form")
const settingsWS = ss.getSheetByName("Settings")
const dataWS = ss.getSheetByName("Data")

//Get the value for the Event ID field in the Form
const idCell = formWS.getRange("C3")

const searchCell = formWS.getRange("C13")

//Get the value for the other fields in the Form using an Array
// Grab the Cell Number based on the way they will be collected in the Spreadsheet
const fieldRange = ["F3","C6","F6","C9","F9","C11"]

function submitRecord() {

  const id = idCell.getValue()

  if(id == ""){
    createNewRecord()
    return
  }

  const cellFound = dataWS.getRange("A:A")
                      .createTextFinder(id)
                      .matchCase(true)
                      .matchEntireCell(true)
                      .findNext()

  if(!cellFound) return
  const row = cellFound.getRow()

  const fieldValues = fieldRange.map(f => formWS.getRange(f).getValue())
  fieldValues.unshift(id)
  dataWS.getRange(row,1,1,fieldValues.length).setValues([fieldValues])
  searchCell.clearContent()
  ss.toast("id:" + id, "Your Awesome Time Event was Updated")
            
} 

function createNewRecord() {
  //Get the value for the other fields in the Form using an Array
  // Grab the Cell Number based on the way they will be collected in the Spreadsheet

  // Map to the Array and Pull back all the values
  const fieldValues = fieldRange.map(f => formWS.getRange(f).getValue())

  //Get the Next Record ID from the Setting Worsheet and add it to our list
  const nextIDCell = settingsWS.getRange("A2")
  const nextID = nextIDCell.getValue()
  
  // Adds the Next Record ID to the beginning of the Array of Values
  fieldValues.unshift(nextID)

  //console.log(fieldValues)
  //Add the Form data to the data tab and increments the ID Value by 1
  dataWS.appendRow(fieldValues)
  idCell.setValue(nextID)
  
  // Increments the ID in the Settings tab
  nextIDCell.setValue(nextID+1)
  ss.toast("id:" + nextID, "Your Awesome Time Event was Created")

} 

function newRecord() {
  // Map to the Array and Pull back all the values
  fieldRange.forEach(f => formWS.getRange(f).clearContent())
  idCell.clearContent()
  searchCell.clearContent()
}


function searchRecord() {
  //Get the Next Record ID from the Setting Worsheet and add it to our list
  const searchValue = searchCell.getValue()

  const data = dataWS.getRange("A2:H").getValues()
  const recordsFound = data.filter(r => r[7] == searchValue)
  if(recordsFound.length === 0) return

  idCell.setValue(recordsFound[0][0])

  fieldRange.forEach((f,i) => formWS.getRange(f).setValue(recordsFound[0][i+1]))

}

function deleteRecord() {
  const id = idCell.getValue()

  if(id == ""){
    createNewRecord()
    return
  }

  const cellFound = dataWS.getRange("A:A")
                      .createTextFinder(id)
                      .matchCase(true)
                      .matchEntireCell(true)
                      .findNext()

  if(!cellFound) return
  const row = cellFound.getRow()
  dataWS.deleteRow(row)
  newRecord()
  ss.toast("id:" + id, "Your Awesome Time Event was Deleted")

}

var sheetName = 'Sheet1'
        var scriptProp = PropertiesService.getScriptProperties()

        function intialSetup () {
          var activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet()
          scriptProp.setProperty('key', activeSpreadsheet.getId())
        }

        function doPost (e) {
          var lock = LockService.getScriptLock()
          lock.tryLock(10000)

          try {
            var doc = SpreadsheetApp.openById(scriptProp.getProperty('key'))
            var sheet = doc.getSheetByName(sheetName)

            var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0]
            var nextRow = sheet.getLastRow() + 1

            var newRow = headers.map(function(header) {
              return header === 'timestamp' ? new Date() : e.parameter[header]
            })

            sheet.getRange(nextRow, 1, 1, newRow.length).setValues([newRow])

            return ContentService
              .createTextOutput(JSON.stringify({ 'result': 'success', 'row': nextRow }))
              .setMimeType(ContentService.MimeType.JSON)
          }

          catch (e) {
            return ContentService
              .createTextOutput(JSON.stringify({ 'result': 'error', 'error': e }))
              .setMimeType(ContentService.MimeType.JSON)
          }

          finally {
            lock.releaseLock()
          }
        }
