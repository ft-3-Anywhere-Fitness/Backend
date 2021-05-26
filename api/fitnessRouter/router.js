const express = require('express')
const router = express.Router()
const Fitness = require('./model')
const validateId = require('./middleware')

router.get('/', async (req, res, next) => {
    try {
        const fitnessClasses = await Fitness.getAll()
        res.json(fitnessClasses)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', validateId, async (req, res, next) => {
    try {
        res.json(req.fitness)
    } catch (err) {
        next(err)
    }
})

module.exports = router 