
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

const updateUser = async(req, res) => {
    const user = await usersModel.findById(req.params.id)
    user.name = req.body.name
    user.age = req.body.age
    user.description = req.body.description
    const data = await user.save()

    const response = {
        status: 'Success',
        data: {
            user:[data]
        }
    }
    res.json(response)
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
