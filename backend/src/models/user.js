const {Schema, model} = require('mongoose')

const userSchema = new Schema({
    name:String,
    age: Number,
    description: String
})

module.exports = model('user', userSchema)