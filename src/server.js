const express = require('express')

const app = express()

const mentorsRoutes = require('./routes/mentors')
const kodersRoutes = require('./routes/koders')
const coursesRoutes = require('./routes/courses')

app.use(express.json())

app.use('/mentors', mentorsRoutes)
app.use('/koders', kodersRoutes)
app.use('/courses', coursesRoutes)

app.get('/', (req, res) => {
    res.json({
        success: true,
        message: 'KodemiAPI running'
    })
})

module.exports = app
