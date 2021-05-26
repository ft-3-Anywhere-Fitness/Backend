const db = require('../../data/db-config')

const getAll = ()  => {
    return db('fitness_classes')
}

const getById = () => {

}

module.exports = {getAll, getById}