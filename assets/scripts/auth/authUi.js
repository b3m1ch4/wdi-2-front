'use strict'
/* ===== required files ===== */
const store = require('../store.js')

//
const signUpSuccess = function () {
  $('#user-message').text('registration success!')
  // $('#user-message').removeClass()
  // $('#user-message').addClass('success')
  $('#sign-up').hide()
  $('#sign-up input').val('')
}

//
const signUpFail = function () {
  $('#user-message').text('registration failure :(')
  // $('#user-message').removeClass()
  // $('#user-message').addClass('fail')
  $('#sign-up input').val('')
}

//
const signInSuccess = function (response) {
  store.user = response.user
  $('#user-message').text('welcome back ' + store.user.email + ' !')
  $('.nav-link').show()
  $('.logged-in').show()
  $('.logged-out').hide()
  $('#sign-up').hide()
  $('#verwaltung').hide()
  $('#gigs-display').hide()
  $('#sign-in input').val('')
}

//
const signInFail = function () {
  $('#user-message').text('login failure, please try again')
  $('#user-message').removeClass()
  $('#user-message').addClass('fail')
  $('#sign-in input').val('')
}

//
const changePasswordSuccess = function () {
  $('#user-message').text('your password was updated')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#change-password input').val('')
}

//
const changePasswordFail = function () {
  $('#user-message').text('password could not be changed, please try again')
  $('#user-message').removeClass()
  $('#user-message').addClass('fail')
  $('#change-password input').val('')
}

//
const signOutSuccess = function () {
  $('#user-message').text('see you again soon!')
  // $('#user-message').removeClass()
  // $('#user-message').addClass('success')
  $('.container').hide()
  $('.settings').hide()
  $('.nav-link').hide()
  $('#sign-up').hide()
  $('.logged-out').show()
}

//
const signOutFail = function () {
  $('#user-message').text('your request could not be completed')
  // $('#user-message').removeClass()
  // $('#user-message').addClass('fail')
}

//
  module.exports = {
    signUpSuccess,
    signUpFail,
    signInSuccess,
    signInFail,
    changePasswordSuccess,
    changePasswordFail,
    signOutSuccess,
    signOutFail
  }
