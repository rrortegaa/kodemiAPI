const express = require('express')

const router = express.Router()

const koder = require('../usecases/koders') // Importa el usecase

router.get('/', async (req,res) =>{
    const koders = await koder.get()
    res.json({
        success: true,
        message: 'Done!',
        payload: {
            koders
        }
    })
})

router.post('/', async (req, res) => { // Callback asíncrono
    try {
        const koderData = req.body
        console.warn('koderData: ', koderData)
        console.warn('Aquí si llego MUAJAJAJAJA')
        const newKoder = await koder.create(koderData) // Espero la respuesta

        res.json ({
            success: true,
            message: 'New Koder Created',
            payload: { koder: newKoder }
        })
    } catch (error) {
        res.status(400) // Manda el error 400 (Bad Request) al body de la respuesta

        res.json ({
            success: false,
            message: 'Koder could not be created',
            error: [
                error
            ]
        })
    }
})

router.delete('/:id', async (req, res) => { // :id es un URI parameter
    try {
        const { id } = req.params
        const koderDeleted = await dispatchEvent.del(id)
        res.json ({
            success: true,
            message: 'Koder deleted',
            payload: { koder: koderDeleted }
        })
    } catch (error) {
        res.status(400)
        res.json ({
            success: false,
            message: 'Koder could not be deleted',
            error: [ 
                error
            ]
        })
    }
})

module.exports = router