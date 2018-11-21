const express = require('express')

const router = express.Router()

const mentor = require('../usecases/mentors') // Importar el usecase

router.get('/', async (req,res) =>{
    const mentors = await mentor.get()
    res.json({
        success: true,
        message: 'Done!',
        payload: {
            mentors
        }
    })
})

router.post('/', async (req, res) => { // Callback asíncrono
    try {
        const mentorData = req.body
        console.warn('mentorData: ', mentorData)
        console.warn('Aquí si llego MUAJAJAJAJA')
        const newMentor = await mentor.create(mentorData) // Espero la respuesta

        res.json ({
            success: true,
            message: 'New Mentor Created',
            payload: { mentor: newMentor }
        })
    } catch (error) {
        res.status(400) // Manda el error 400 (Bad Request) al body de la respuesta

        res.json ({
            success: false,
            message: 'Mentor could not be created',
            error: [
                error
            ]
        })
    }
})

router.delete('/:id', async (req, res) => { // :id es un URI parameter
    try {
        const { id } = req.params
        const mentorDeleted = await dispatchEvent.del(id)
        res.json ({
            success: true,
            message: 'Mentor deleted',
            payload: { mentor: mentorDeleted }
        })
    } catch (error) {
        res.status(400)
        res.json ({
            success: false,
            message: 'Mentor could not be deleted',
            error: [ 
                error
            ]
        })
    }
})

module.exports = router