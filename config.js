'use strict'

const config = {
  client: {
    endpoints: {
      careers: 'http://api.pltzi.com/career',
      courses: 'http://api.pltzi.com/course',
      users: 'http://api.pltzi.com/user',
      auth: 'http://api.pltzi.com/auth'
    }
  },
  secret: process.env.PLTZI_SECRET || 'pltz1' // default just for test
}

if (process.env.NODE_ENV !== 'production') {
  config.client.endpoints = {
    careers: 'http://localhost:5000',
    courses: 'http://localhost:5001',
    users: 'http://localhost:5002',
    auth: 'http://localhost:5003'
  }
}

module.exports = config