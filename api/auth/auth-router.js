const express = require('express')
const bcrypt = require('bcryptjs')
const tokenGenerator = require('./generateToken')
const {checkPayload, checkUniqueName} = require('./auth-middleware')
const User = require('./auth-model')

const router = express.Router()

// post - register new user
router.post('/register', checkPayload, checkUniqueName, (req, res, next) => {
    const { password } = req.body
    const hash = bcrypt.hashSync(password, 8)
    req.body.password = hash

    User.add(req.body)
        .then(([user]) => {
            res.status(201).json(user)
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router