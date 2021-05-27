const jwt = require('jsonwebtoken')

function tokenGenerator(user)  {
    const payload = {
        sub: user.user_id,
        username: user.user_username
    }

    const options = {
        expiresIn: '1d'
    }
}