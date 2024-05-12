import 'dotenv/config'
import express from 'express'
import { Estudiante } from './models/estudiante.model.js'
const app = express()

// habilitar el req.body
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/estudiantes', async (req, res) => {
    try {
        const estudiantes = await Estudiante.findAll()
        return res.json(estudiantes)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.get('/estudiantes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const estudiante = await Estudiante.findOneByRut(id)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})


app.delete('/estudiantes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const estudiante = await Estudiante.remove(id)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
});

app.post('/estudiantes', async (req, res) => {
    try {
        const { nombre, rut, curso, nivel } = req.body
        const newEstudiante = await Estudiante.create({ nombre, curso, nivel, rut })
        return res.json(newEstudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

app.put('/estudiantes/:id', async (req, res) => {
    try {
        const { id } = req.params
        const { nombre, rut, curso, nivel } = req.body
        const estudianteUpdate = {
            id, 
            nombre,
            rut, 
            curso, 
            nivel  
        }
        const estudiante = await Estudiante.update(estudianteUpdate)
        return res.json(estudiante)
    } catch (error) {
        console.log(error)
        return res.status(500).json({ ok: false })
    }
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Example app listening on PORT ${PORT}`)
})