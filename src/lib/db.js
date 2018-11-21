const mongoose = require('mongoose')

const connect = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb://localhost/kodemiapi', { // Conexión a la DB kodemiapi
        useNewUrlParser: true // Nuevo tipo de parser, analizador de url
})

const db = mongoose.connection // Conexión  ya hecha

// Conexión exitosa
db.on('open', () => {
    console.warn('Connection Open')
    resolve(mongoose)
})
// Error de Conexión 
db.on('error', () => {
    console.error('No se pudo conectar: ', error)
    reject(error)
})

module.exports = { connect }