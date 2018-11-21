const mongoose = require('mongoose')

const { Schema } = mongoose

const schema = new Schema({
    name: {
        required: true,
        type: String,
        trim: true, // Elimina los espacios al inicio y final de la cadena
        maxlength: 20,
        minlength: 1
    }

})

module.exports = {
    schema,
    model: mongoose.model('Courses', schema)
}