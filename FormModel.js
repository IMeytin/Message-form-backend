const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const FormSchema = new Schema({
    name: {
        type: String,
        required: [true, "Please enter your name"]
    },
    email: {
        type: String,
        required: [true, "Please enter your email"]
    },
    message: {
        type: String,
        required: [true, "Please enter your message"]
    }
})

module.exports = mongoose.model('FormModel', FormSchema)