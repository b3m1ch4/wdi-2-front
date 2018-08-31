'use strict'
let getFormFields = require('../../../lib/get-form-fields.js')
let engineApi = require('./engineApi.js')
let engineUi = require('./engineUi.js')
let store = require('../store.js')

//
const onAllGames = function (event) {
  event.preventDefault()
  gameApi.allGames()
    .then(gameUi.indexSuccess)
    .catch(gameUi.apiFail)
}
//
// const onFindGame = function (event) {
//   event.preventDefault()
//   const id = $('#find-game input').val()
//   gameApi.oneGame(id)
//   .then(gameUi.findGame)
//   .catch(gameUi.apiFail)
// }
// onNewGame creates a new game in the Api
// let onNewGig = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   gameApi.newGame(data)
//   .then(gameUi.gameStart)
//   .catch(gameUi.apiFail)
// }
// onPatchGame updates the api with the gameBoard's info
// let onPatchGame = function (event) {
//   event.preventDefault()
//   let i = event.target.id.slice(0, 1)
//   const data = {
//   "gig": {
//     "cell": {
//       "index": i,
//       "value": gameLogic.current.player
//     },
//     "cancelled": false
//   }
// }
//   gameApi.patchGame(data)
//   .then(gameUi.apiUpdate)
//   .catch(gameUi.apiFail)
// }
//

// event listeners
let engineHandlers = function () {
}
//
module.exports = {
  engineHandlers
}
