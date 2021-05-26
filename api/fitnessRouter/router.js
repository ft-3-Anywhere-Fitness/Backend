const express = require('express')
const router = express.Router()
const Fitness = require('./model')
const {validateId, validatePayload} = require('./middleware')

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

router.post('/', validatePayload, async (req, res, next) => {
    try {
        const newFitnessClass = await Fitness.create(req.body)

        res.status(201).json(newFitnessClass)
    } catch (err) {
        next(err)
    }
})

module.exports = router 