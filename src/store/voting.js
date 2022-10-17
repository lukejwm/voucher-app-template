// import axios from 'axios'

// const sheetId = '1RXvVfpb_3ul38Ob0K7ZVU_YOVO-tgiXjyFNbdoUQvSM'

// const choiceOptions = ['project_1', 'project_2', 'project_3', 'project_4']

// // if voteCap == 0, there is no cap
// // otherwise, voteCap should be a positive integer which determines
// // the maximum number of votes which can be cast for any given project
// const voteCaps = {
//   project_1: 0,
//   project_2: 0,
//   project_3: 0,
//   project_4: 0,
// }

// // Sheet column mapping for Vouchers sheet
// const colMap = {
//   uid: 0,
//   opened_site: 1,
//   opened_time: 2,
//   spent: 3,
//   project_choice: 4,
//   spent_time: 5,
//   last_opened: 6,
//   open_count: 7,
// }

// // Utils

// function formattedDate() {
//   const timezone = SpreadsheetApp.getActive().getSpreadsheetTimeZone()
//   return Utilities.formatDate(new Date(), timezone, 'dd-MM-yyyy HH:mm:ss')
// }

// function countVotesByProjectType(data) {
//   const projectCountDict = {}
//   choiceOptions.forEach((choice) => (projectCountDict[choice] = 0))
//   data.forEach((row) => {
//     const projectType = row[colMap['project_choice']]
//     if (choiceOptions.includes(projectType)) {
//       projectCountDict[projectType]++
//     }
//   })
//   return projectCountDict
// }

// function countsToFractions(countsDict) {
//   const totalVotes = Object.values(countsDict).reduce((a, b) => a + b, 0)
//   const fractions = {}
//   Object.keys(countsDict).forEach(
//     (key) =>
//       (fractions[key] =
//         totalVotes === 0
//           ? 0
//           : parseFloat(countsDict[key] / totalVotes).toFixed(4)),
//   )
//   return fractions
// }

// function updateChoice(idParam, choiceParam) {
//   const id = idParam
//   const choice = choiceParam.toString()
//   const sheet = SpreadsheetApp.openById(sheetId)
//   const dataRange = sheet.getDataRange()
//   // dealing with the 2d array should save extra http reqs
//   // but it may become unwieldy in the future if we end up with large sheets
//   const data = dataRange.getValues()
//   const headers = data.shift()
//   const existingCounts = countVotesByProjectType(data)
//   const ids = data.map((row) => row[colMap['uid']])
//   let response = {
//     status: 'failed',
//     message: 'Unrecognised error',
//     newResults: {},
//     capsMet: {},
//   }
//   if (ids.includes(id) && choiceOptions.includes(choice)) {
//     const row_index = ids.indexOf(id)
//     if (data[row_index][colMap['spent']] === true) {
//       response.message = 'Already spent'
//     } else if (
//       voteCaps[choice] !== 0 &&
//       existingCounts[choice] >= voteCaps[choice]
//     ) {
//       response.message = 'Cap already met'
//     } else {
//       data[row_index][colMap['project_choice']] = choice
//       data[row_index][colMap['spent_time']] = formattedDate()
//       data[row_index][colMap['spent']] = true
//       dataRange.offset(row_index + 1, 0, 1).setValues([data[row_index]])
//       response.status = 'succeeded'
//       response.message = 'Successfully updated'
//     }
//   } else if (!ids.includes(id)) {
//     response.message = 'Invalid ID'
//   }
//   const counts = countVotesByProjectType(data)
//   const fractions = countsToFractions(counts)
//   response.newResults = fractions
//   const capsMet = {}
//   choiceOptions.forEach((option) => {
//     capsMet[option] =
//       voteCaps[option] !== 0 && counts[option] >= voteCaps[option]
//   })
//   response.capsMet = capsMet
//   console.log(response)
//   return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
//     ContentService.MimeType.JSON,
//   )
// }

// function checkId(idParam) {
//   const response = { status: false, spent: false }
//   const id = idParam
//   const sheet = SpreadsheetApp.openById(sheetId)
//   const dataRange = sheet.getDataRange()
//   const data = dataRange.getValues()
//   const headers = data.shift()
//   const ids = data.map((row) => row[colMap['uid']])
//   if (ids.includes(id)) {
//     const row_index = ids.indexOf(id)
//     if (data[row_index][colMap['opened_site']] == true) {
//       data[row_index][colMap['last_opened']] = formattedDate()
//     } else {
//       data[row_index][colMap['opened_site']] = true
//       data[row_index][colMap['opened_time']] = formattedDate()
//     }
//     data[row_index][colMap['open_count']]++
//     dataRange.offset(row_index + 1, 0, 1).setValues([data[row_index]])
//     response.status = true
//     response.spent = data[row_index][colMap['spent']]
//   }
//   return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
//     ContentService.MimeType.JSON,
//   )
// }

// function appendToEnd(sheet, array) {
//   sheet.appendRow(array)
// }

// // Endpoints

// const doPost = (request) => {
//   // nb. the difference between 'parameter' and 'parameters' properties of the request object
//   const requestType = request.parameter.type
//   if (requestType === 'update') {
//     const id = request.parameter.id
//     const choice = request.parameter.choice
//     return updateChoice(id, choice)
//   }
//   if (requestType === 'check') {
//     const id = request.parameter.id
//     return checkId(id)
//   }
// }

// function doGet() {
//   const sheet = SpreadsheetApp.openById(sheetId)
//   const dataRange = sheet.getDataRange()
//   const data = dataRange.getValues().slice(1)
//   const counts = countVotesByProjectType(data)
//   const fractions = countsToFractions(counts)
//   const capsMet = {}
//   choiceOptions.forEach((option) => {
//     capsMet[option] =
//       voteCaps[option] !== 0 && counts[option] >= voteCaps[option]
//   })
//   response = { fractions, capsMet }
//   console.log(response)
//   return ContentService.createTextOutput(JSON.stringify(response)).setMimeType(
//     ContentService.MimeType.JSON
//   )
// }

// // test functions, these update the sheet!

// function testUpdate() {
//   console.log(updateChoice('HI5TRTDND', 'project_1', 'true'))
// }

// function testCheck() {
//   response = checkId('HI5TRTDND')
//   console.log(response)
// }

// function testGet() {
//   doGet()
// }
