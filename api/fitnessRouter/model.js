const db = require('../../data/db-config')

const getAll = ()  => {
    return db('fitness_classes')
}

const getById = (id) => {
    return db('fitness_classes')
        .where('fitness_class_id', id)
        .first()
}

module.exports = {getAll, getById}