const createUser = (req, res) => {
    res.send('Create')
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
