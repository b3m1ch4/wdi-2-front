'use strict'
const events = require('./engine/engineEvents.js')
const authentication = require('./auth/authEvents.js')

$(() => {
  authentication.authHandlers()
  events.engineHandlers()
})
