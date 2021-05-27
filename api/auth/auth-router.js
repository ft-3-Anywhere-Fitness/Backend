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

// post - login as an existing user
router.post('/login', checkPayload, (req, res, next) => {
    const { username, password } = req.body

    User.findBy({username})
        .then(([existing]) => {
            if (existing && bcrypt.compareSync(password, existing.password)) {
                const token = tokenGenerator(existing)
                
                res.json({
                    message: `Welcome, ${existing.username}`,
                    token: token
                })
            } else {
                next({
                    status: 401,
                    message: 'invalid credentials'
                })
            }
        })
        .catch(err => {
            next(err)
        })
})

module.exports = router