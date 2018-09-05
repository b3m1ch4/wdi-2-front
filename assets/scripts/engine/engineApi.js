'use strict'
/* ===== required files ===== */
let config = require('../config.js')
let store = require('../store.js')

/* ===== create one gig ===== */
const newGig = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/gigs/',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token,
    }
  })
}

/* ===== show all gigs ===== */
const allGigs = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/gigs/',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

/* ===== show one gig  ===== */
const oneGig = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/gigs/' + data.gigs.id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

/* ===== update one gig ===== */
const patchGig = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/gigs/' + data.gigs.id,
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token,
      // 'Content-Type': 'application/json'
    }
  })
}

/* ===== delete a gig ===== */
const deleteGig = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/gigs/' + data.gigs.id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

//
module.exports = {
  newGig,
  allGigs,
  oneGig,
  patchGig,
  deleteGig
}
