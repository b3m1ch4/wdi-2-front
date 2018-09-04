'use strict'
/* ===== required files ===== */
const store = require('../store.js')

//
const signUpSuccess = function () {
  $('#user-message').text('registration success!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#sign-up input').val('')
}

//
const signUpFail = function () {
  $('#user-message').text('registration failure :(')
  $('#user-message').removeClass()
  $('#user-message').addClass('fail')
  $('#sign-up input').val('')
}

//
const signInSuccess = function (response) {
  $('#user-message').text('welcome back!')
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('#sign-in input').val('')
  store.user = response.user
  $('.logged-in').show()
  $('.logged-out').hide()
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
  $('#user-message').removeClass()
  $('#user-message').addClass('success')
  $('.logged-in').hide()
  $('.logged-out').show()
  $('#game-board').hide()
}

//
const signOutFail = function () {
  $('#user-message').text('your request could not be completed')
  $('#user-message').removeClass()
  $('#user-message').addClass('fail')
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
