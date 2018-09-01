'use strict'
let getFormFields = require('../../../lib/get-form-fields.js')
let engineApi = require('./engineApi.js')
let engineUi = require('./engineUi.js')
let store = require('../store.js')
//
/* onNewGig creates a new gig in the Api */
let onNewGig = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  engineApi.newGig(data)
  .then(engineUi.gigCreate)
  .catch(engineUi.apiFail)
}
//
const onAllGigs = function (event) {
  event.preventDefault()
  engineApi.allGigs()
    .then(engineUi.indexSuccess)
    .catch(engineUi.apiFail)
}
//
// const onFindGig = function (event) {
//   event.preventDefault()
//   const id = $('#find-gig input').val()
//   gigApi.oneGig(id)
//   .then(gigUi.findGig)
//   .catch(gigUi.apiFail)
// }

// onPatchGig updates the api with the gigBoard's info
// let onPatchGig = function (event) {
//   event.preventDefault()
//   let i = event.target.id.slice(0, 1)
//   const data = {
//   "gig": {
//     "cell": {
//       "index": i,
//       "value": gigLogic.current.player
//     },
//     "cancelled": false
//   }
// }
//   gigApi.patchGig(data)
//   .then(gigUi.apiUpdate)
//   .catch(gigUi.apiFail)
// }
//

// event listeners
let engineHandlers = function () {
  $('#gig-index').on('click', onAllGigs)
  $('#gig-maker').on('submit', onNewGig)
}
//
module.exports = {
  engineHandlers
}
