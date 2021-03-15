const {Router} = require('express')

const router = Router()

router.get('/user', (req, res)=>{
    res.send('Hello')
})

module.exports = router
