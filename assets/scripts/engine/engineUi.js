'use strict'

/* ===== required files ===== */
let store = require('../store')
const showGigsTemplate = require('../templates/helpers/gig-listing.handlebars')

/* ===== failure to connect to server ===== */
const apiFail = function (event) {
    $('#user-message').html('hopla! something went wrong. please try again')
    $('.eingabe input').val('')
}

/* ===== check for empty string ===== */
const checkEmpty = function () {
  $('#user-message').html("hopla! don't forget to give your event a title and description")
  $('.eingabe input').val('')
}

/* ===== create one gig ===== */
const createSuccess = function () {
  $('#user-message').html("the event was successfully created!")
  $('.eingabe input').val('')
}

/* ===== show all gigs ===== */
const indexSuccess = function (data) {
  const showGigsHtml = showGigsTemplate({ gigs: data.gigs })
  $('#gigs-display').html(showGigsHtml)
  $('.eingabe input').val('')
}

/* ===== show one gig  ===== */
const findSuccess = function (data) {
  const showGigsHtml = showGigsTemplate({ gigs: data })
  $('#gigs-display').html(showGigsHtml)
  $('.eingabe input').val('')
}

/* ===== update one gig ===== */
const updateSuccess = function (response) {
  $('#user-message').html("this event was successfully updated")
  $('.eingabe input').val('')
}
/* ===== delete a gig ===== */
const deleteSuccess = function () {
  $('#user-message').html("this event was successfully deleted")
  $('.eingabe input').val('')
}

//
module.exports = {
  apiFail,
  checkEmpty,
  createSuccess,
  indexSuccess,
  findSuccess,
  updateSuccess,
  deleteSuccess
}
