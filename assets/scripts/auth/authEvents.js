'use strict'
/* ===== required files ===== */
const getFormFields = require('../../../lib/get-form-fields.js')
const authApi = require('./authApi.js')
const authUi = require('./authUi.js')
const engineEvents = require('../engine/engineEvents.js')
const store = require('../store.js')
//
const onSignUp = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  //
  authApi.signUp(data)
    .then(authUi.signUpSuccess)
    .catch(authUi.signUpFail)
}

const onSignIn = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  //
  authApi.signIn(data)
    .then(authUi.signInSuccess)
    .catch(authUi.signInFail)
}

const onChangePassword = function () {
  event.preventDefault()
  const data = getFormFields(event.target)
  //
  authApi.changePassword(data)
    .then(authUi.changePasswordSuccess)
    .catch(authUi.changePasswordFail)
}

const onSignOut = function (event) {
  event.preventDefault()
  authApi.signOut()
    .then(authUi.signOutSuccess)
    .catch(authUi.signOutFail)
  }
//
const authHandlers = function () {
// target the id of the form itself
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#sign-out').on('submit', onSignOut)
}

module.exports = {
  authHandlers // same as addHandlers: addHandlers
}
