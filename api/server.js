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

server.use((err, req, res, next) => { //eslint-disable-line
    res.status(err.status || 500).json({
        message: err.message, 
        stack: err.stack
    })
})

module.exports = server
