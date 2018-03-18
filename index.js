'use strict'

const createClient = require('hafas-client')
const nahshProfile = require('hafas-client/p/nahsh')

const client = createClient(nahshProfile)

module.exports = client
