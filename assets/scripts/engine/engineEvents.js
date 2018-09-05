'use strict'

/* ===== required files ===== */
let getFormFields = require('../../../lib/get-form-fields.js')
let engineApi = require('./engineApi.js')
let engineUi = require('./engineUi.js')
let store = require('../store.js')

/* ===== create one gig ===== */
let onNewGig = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  engineApi.newGig(data)
  .then(engineUi.createSuccess)
  .catch(engineUi.apiFail)
}

/* ===== show all gigs ===== */
const onAllGigs = function (event) {
  event.preventDefault()
  engineApi.allGigs()
    .then(engineUi.indexSuccess)
    .catch(engineUi.apiFail)
}

/* ===== show one gig  ===== */
const onFindGig = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  // store.search = data
  engineApi.oneGig(data)
  .then(engineUi.findSuccess)
  .catch(engineUi.apiFail)
}

/* ===== update one gig ===== */
let onUpdateGig = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("data is", data)
  // const data = {
  // "gig": {
  //   "cell": {
  //     "index": i,
  //     "value": gigLogic.current.player
  //   },
  // }
// }
  engineApi.patchGig(data)
  .then(engineUi.updateSuccess)
  .catch(engineUi.apiFail)
}

/* ===== delete a gig ===== */
const onDeleteGig = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log("data is", data)
  engineApi.deleteGig(data)
  .then(engineUi.deleteSuccess)
  .catch(engineUi.apiFail)
}

// event listeners
let engineHandlers = function () {
  $('#gig-index').on('click', onAllGigs)
  $('#gig-maker').on('submit', onNewGig)
  $('#gig-finder').on('submit', onFindGig)
  $('#gig-changer').on('submit', onUpdateGig)
  $('#gig-deleter').on('submit', onDeleteGig)
}

//
module.exports = {
  engineHandlers
}
