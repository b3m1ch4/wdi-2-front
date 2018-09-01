'use strict'
/* ===== required files ===== */
let store = require('../store')
//
const apiFail = function (response) {
    response.preventDefault()
    $('#user-message').html('<p>API Fail. Please try again.</p>>')
}
//
const indexSuccess = function (response) {
  console.log(response)
  response.gigs.forEach((gig) => {
  let gigId = gig.id
  console.log(gigId)
  $('#gigs-display').append("gigId is" + gigId)
  })
}
//

//
const apiUpdate = function (response) {
  store = response
}
//
module.exports = {}
