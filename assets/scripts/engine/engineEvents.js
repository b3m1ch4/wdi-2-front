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

/* ===== toggles ===== */
const onComposeToggle = function () {
  $('.eingabe input').val('')
  $('#gigs-display').html('')
  $('#change-password').hide()
  $('#sign-up input').val('')
  $('#gig-index').hide()
  $('#gig-finder').hide()
  $('#gig-changer').hide()
  $('#gig-deleter').hide()
  $('#gigs-display').hide()
  $('#verwaltung').show()
  $('#gig-maker').show()
  }

const onCueToggle = function () {
  $('.eingabe input').val('')
  $('#gigs-display').html('')
  $('#change-password').hide()
  $('#sign-up input').val('')
  $('#gig-maker').hide()
  $('#gig-changer').hide()
  $('#gig-deleter').hide()
  $('#verwaltung').show()
  $('#gig-index').show()
  $('#gig-finder').show()
  $('#gigs-display').show()
}

const onModulateToggle = function () {
  $('.eingabe input').val('')
  $('#gigs-display').html('')
  $('#change-password').hide()
  $('#sign-up input').val('')
  $('#gig-maker').hide()
  $('#gig-index').hide()
  $('#gig-finder').hide()
  $('#gigs-display').hide()
  $('#verwaltung').show()
  $('#gig-changer').show()
  $('#gig-deleter').show()
}

// event listeners
let engineHandlers = function () {
  $('#gig-index').on('click', onAllGigs)
  $('#gig-maker').on('submit', onNewGig)
  $('#gig-finder').on('submit', onFindGig)
  $('#gig-changer').on('submit', onUpdateGig)
  $('#gig-deleter').on('submit', onDeleteGig)
  $('#compose-toggle').on('click', onComposeToggle)
  $('#cue-toggle').on('click', onCueToggle)
  $('#modulate-toggle').on('click', onModulateToggle)
}

//
module.exports = {
  engineHandlers
}
