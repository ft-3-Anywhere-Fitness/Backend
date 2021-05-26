const express = require('express')
const router = express.Router()
const Fitness = require('./model')

router.get('/', async (req, res, next) => {
    try {
        const fitnessClasses = await Fitness.getAll()
        res.json(fitnessClasses)
    } catch (err) {
        next(err)
    }
})

module.exports = router 