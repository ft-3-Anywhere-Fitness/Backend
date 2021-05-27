const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const fitnessRouter = require('./fitnessRouter/router')
const authRouter = require('./auth/auth-router')

const server = express()
server.use(express.json())
server.use(helmet())
server.use(cors())

// ROUTER ENDPOINTS
server.use('/api/classes', fitnessRouter)
server.use('/api/auth', authRouter)

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
