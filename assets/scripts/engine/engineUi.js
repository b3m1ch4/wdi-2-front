'use strict'
/* ===== required files ===== */
let store = require('../store')
//
const indexSuccess = function (response) {
  response.games.forEach((game) => {
  let allGigs = response.gigs.length
  $('#game-message').html("all " + allGigs + "!")
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
