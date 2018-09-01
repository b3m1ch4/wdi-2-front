'use strict'
/* ===== required files ===== */
let store = require('../store')
//
const gigCreate = function () {
  store.gig = response.gig
  $('#user-message').html("your event was created!")
}
//
const indexSuccess = function (response) {
  response.gigs.forEach((gig) => {
  $('#gigs-display').append("gig id is: ", gig.id + " ")
  $('#gigs-display').append("gig title is: ", gig.title + " ")
  $('#gigs-display').append("gig date is: ", gig.date + " ")
  $('#gigs-display').append("gig time is: ", gig.time + " ")
  $('#gigs-display').append("gig id is: ", gig.description + " ")
  })
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
