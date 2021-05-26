const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const fitnessRouter = require('./fitnessRouter/router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// API ENDPOINT
server.use('/api/classes', fitnessRouter)

// sanity check
server.get('/', (req, res) => {
    res.json({message: 'server is working!'})
})

module.exports = server
