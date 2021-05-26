const db = require('../../data/db-config')

const getAll = ()  => {
    return db('fitness_classes')
}

const getById = (id) => {
    return db('fitness_classes')
        .where('fitness_class_id', id)
        .first()
}

const create = async (fitness_class) => {
    // const [id] = await db('fitness_classes').insert(fitness_class)

    // return getById(id)
    return await db('fitness_classes').insert(fitness_class, [
        'fitness_class_name', 'fitness_class_type', 'start_time', 
        'duration', 'intensity_level', 'location', 
        'fitness_class_attendees', 'fitness_class_max'])
}

module.exports = {getAll, getById, create}