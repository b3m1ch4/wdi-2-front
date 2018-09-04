'use strict'
// required files
let config = require('../config.js')
let store = require('../store.js')
// create a gig
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

// get all past gigs
const allGigs = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/gigs/',
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
// get one past Gig
const oneGig = function (data) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/gigs/' + data.gigs.id,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}

// update gig
const patchGig = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/gigs/' + store.Gig.id,
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token,
      // 'Content-Type': 'application/json'
    }
  })
}
//
const deleteGig = function (data) {
  return $.ajax({
    url: config.apiUrl + data.gigs.id,
    method: 'DELETE',
    data,
    headers: {
      'Authorization': 'Token token=' + store.user.token
    }
  })
}
//
module.exports = {
  allGigs,
  oneGig,
  newGig,
  patchGig
}
