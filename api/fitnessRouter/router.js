const router = require('express').Router()

router.get('/', (req, res) => {
    res.json({message: 'fitness class router is working'})
})

module.exports = router