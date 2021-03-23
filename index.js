'use strict'

const createClient = require('hafas-client')
const nahshProfile = require('hafas-client/p/nahsh')

const createNahshClient = (userAgent, opt = {}) => {
	return createClient(nahshProfile, userAgent, opt)
}

module.exports = createNahshClient
