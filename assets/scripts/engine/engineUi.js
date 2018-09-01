'use strict'
/* ===== required files ===== */
let store = require('../store')
//
const indexSuccess = function (response) {
  response.gigs.forEach((gig) => {
  let gigId = gig.id
  $('#gigs-display').html("gig id is ", gigId)
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
