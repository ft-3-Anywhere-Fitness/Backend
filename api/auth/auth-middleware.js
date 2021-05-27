const User = require('./auth-model')

const checkPayload = (req, res ,next) => {
    const { username, password } = req.body;

    if (!username || !password) {
        next({
            status: 401,
            message: 'username and pasword are required'
        })
    } else { 
        next()
    }
}

const checkUniqueName = async (req, res, next) => {
    const { username } = req.body

    const existingUser = await User.findBy({username})

    if (existingUser.length) {
        next({
            status: 422,
            message: 'username already taken'
        })
    } else {
        next()
    }
}



module.exports = {checkPayload, checkUniqueName}