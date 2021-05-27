const db = require('../../data/db-config')

const findBy = (filter) => {
    return db('users')
        .where(filter)
}

const findById = (user_id) => {
    return db('users')
        .where('user_id', user_id)
        .first()
}

const add = async (user) => {
    return await db('users').insert(user, ['user_id', 'username', 'password', 'user_type'])
}

module.exports = {findBy, findById, add}