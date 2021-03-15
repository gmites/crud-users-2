
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

const getUsers = async(req, res) => {
    const data = await usersModel.find()
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response)
}

const getUser = async(req, res) => {
    const data = await usersModel.findById(req.params.id)
    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response)
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
