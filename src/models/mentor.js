const mongoose =require('mongoose')

const { Schema } = mongoose

const { schema } = new Schema({
    name: {
        required: true,
        type: String,
        trim: true,
        maxlength: 20,
        minlength: 1
    },
    age: {
        required: true,
        type: Number
    }
})

module.exports = {
    // Mentors: modelo para la colección mentors
    model: mongoose.model('Mentor', schema),
    schema
}