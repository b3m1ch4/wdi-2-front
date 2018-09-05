'use strict'
/* ===== required files ===== */
const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')
const store = require('../store.js')

//
const onSignUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

//
const onSignIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}

//
const onChangePassword = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

//
const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
  }

//
const onJoinToggle = function () {
  $('#sign-up').show()
  $('#sign-up input').val('')
}

//
const onSettingsToggle = function () {
  $('#gigs-display').hide()
  $('#verwaltung').hide()
  $('#change-password').show()
}

//
const authHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('click', onSignOut)
  $('#join-toggle').on('click', onJoinToggle)
  $('#settings-toggle').on('click', onSettingsToggle)
}

module.exports = {
  authHandlers // same as addHandlers: addHandlers
}
