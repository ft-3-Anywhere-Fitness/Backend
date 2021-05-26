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

const validatePayload = (req, res, next) => {
    const { fitness_class_name, fitness_class_type, start_time, duration, 
        intensity_level, location, fitness_class_attendees, fitness_class_max} = req.body;

    if (!fitness_class_name || !fitness_class_type || !start_time || !duration || !intensity_level
        || !location || !fitness_class_attendees || !fitness_class_max) {
            next({
                status: 400,
                message: 'class name, class type, start time, duration, intensity level, location, attendees and max attendence are required.'
            })
        } else {
            next()
        }
}

module.exports = {validateId, validatePayload}