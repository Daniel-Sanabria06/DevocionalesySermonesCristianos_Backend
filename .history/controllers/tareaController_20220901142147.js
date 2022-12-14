import Proyecto from '../models/Proyecto.js'
import Tarea from '../models/Tareas.js'

const agregarTarea = async (req, res) => {
    const {proyecto} = req.body

    const existeProyecto = await Proyecto.findById(proyecto)

    if (!existeProyecto) {
        const error = new Error('El Proyecto no existe')
        return res.status(404).json({msg: error.message})
    }

    if (existeProyecto.creador.toString() !== req.usuario._id.toString()) {
        const error = new Error('No tienes los permisos para añadir tareas')
        return res.status(404).json({msg: error.message})
    }

    try {
        const tareaAlmacenada = await Tarea.create(req.body)
        res.json(tareaAlmacenada)
    } catch (error) {
        console.log(error)
    }
}

const obtenerTarea = async (req, res) => {
    const {id} = req.params
    const tarea = await Tarea.findById(id)

    if (!tarea){
        const error = new Error("La tarea no existe")
        return res.status(404).json({msg: error.message})
    }
    if (tarea.creador.toString() !== req.usuario._id.toString()){
        const error = new Error("No tienes los permisos")
        return res.status(404).json({msg: error.message})
    }
    res.json(tarea)
}
const actualizarTarea = async (req, res) => {}
const eliminarTarea = async (req, res) => {}
const cambiarEstado = async (req, res) => {}

export {
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado
}