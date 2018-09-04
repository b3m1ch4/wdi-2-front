'use strict'
/* ===== required files ===== */
let store = require('../store')
const showGigsTemplate = require('../templates/helpers/gig-listing.handlebars')
//
const gigCreate = function () {
  store.gig = response.gig
  $('#user-message').html("your event was created!")
}
//
const indexSuccess = function (data) {
  const showGigsHtml = showGigsTemplate({ gigs: data.gigs })
  $('#gigs-display').append(showGigsHtml)
}
//
const apiFail = function (response) {
    response.preventDefault()
    $('#user-message').html('<p>API Fail. Please try again.</p>>')
}
//
const apiUpdate = function (response) {
  store = response
}
//
module.exports = {
  indexSuccess
}
