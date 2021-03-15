const {Router} = require('express')
const {usersController} = require('../controllers')

const router = Router()

router.post('/user', usersController.createUser)
router.get('/users', usersController.getUsers)
router.get('/user/:id', usersController.getUser)
router.put('/user/:id', usersController.updateUser)
router.delete('/user/:id', usersController.deleteUser)

module.exports = router
