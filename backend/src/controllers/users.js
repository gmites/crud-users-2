
const {usersModel} = require('../models')

const createUser = async(req, res) => {
    const newUser = new usersModel(req.body)
    const data = await newUser.save()
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response)
}

const getUsers = (req, res) => {
    res.send('Get all')
}

const getUser = (req, res) => {
    res.send('Get user')
}

const updateUser = (req, res) => {
    res.send('Update user')
}

const deleteUser = (req, res) => {
    res.send('Delete user')
}

module.exports = {
    createUser,
    getUsers,
    getUser,
    updateUser,
    deleteUser
}
