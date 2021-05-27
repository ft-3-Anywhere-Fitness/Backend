const express = require('express')
const bcrypt = require('bcryptjs')
const tokenGenerator = require('./generateToken')
const router = express.Router()

// post - register new user
router.post('/register', (req, res, next) => {
    res.json({message: 'endpoint is working'})
})

module.exports = router