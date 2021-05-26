const Fitness = require('./model')

const validateId = async (req, res, next) => {
    const {id} = req.params

    const fitnessClass = await Fitness.getById(id)

    if (!fitnessClass) {
        next({
            status: 404,
            message: 'class not found'
        })
    } else { 
        req.fitness = fitnessClass
        next()
    }
}

module.exports = validateId