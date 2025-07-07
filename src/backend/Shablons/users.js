const { Schema, model } = require('mongoose');


const Users = new Schema({
    username: { username: String, required: true },
    password: { password: String, required: true },
    email: { email: String, required: true }, 
    avatar: { avatar: String, required: true },
})

module.exports = model('Users', Users);