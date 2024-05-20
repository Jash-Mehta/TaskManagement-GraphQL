const mongoose = require('mongoose');


const userModel = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true

    },
    password: {
        type: String,
        require: true,
    },
    employmentType: {
        type: String,
        require: true
    }
});

const Person = mongoose.model('User', userModel);
module.exports = Person;