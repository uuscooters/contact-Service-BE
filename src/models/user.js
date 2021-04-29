const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
    name: String,
    picture: String,
    phoneNumber: {
        type: String,
        require: true
    },
    address: String
});
exports.Users = mongoose.model('Users', usersSchema);