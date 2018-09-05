'use strict'

/* ===== required files ===== */
let store = require('../store')
const showGigsTemplate = require('../templates/helpers/gig-listing.handlebars')

/* ===== failure to connect to server ===== */
const apiFail = function (response) {
    response.preventDefault()
    $('#user-message').html('Hopla! There was a problem connecting to the server. <p> Please try again later. </p>')
    $('.eingabe input').val('')
}

/* ===== create one gig ===== */
const createSuccess = function () {
  store.gig = response.gig
  $('#user-message').html("the event was successfully created!")
  $('.eingabe input').val('')
}

/* ===== show all gigs ===== */
const indexSuccess = function (data) {
  const showGigsHtml = showGigsTemplate({ gigs: data.gigs })
  $('#gigs-display').append(showGigsHtml)
  $('.eingabe input').val('')
}

/* ===== show one gig  ===== */
const findSuccess = function (data) {
  const showGigsHtml = showGigsTemplate({ gigs: data })
  $('#gigs-display').html(showGigsHtml)
  $('.eingabe input').val('')
}

/* ===== update one gig ===== */
const apiUpdate = function (response) {
  store = response
}
/* ===== delete a gig ===== */
const deleteSuccess = function () {
  $('#user-message').html("this event was successfully deleted")
  $('.eingabe input').val('')
}

//
module.exports = {
  apiFail,
  createSuccess,
  indexSuccess,
  findSuccess,
  apiUpdate,
  deleteSuccess
}
