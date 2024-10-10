import Color from "../database/model/colores.js";
export const listarColores = async (req,res) => {
    try {
        const arrayColores = await Color.find()
        res.status(200).json(arrayColores)
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se encontraron los colores"
        })
    }
}
export const obtenerColor = async (req,res) => {
    try {
        
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje:"Ocurrio un error, no se pudo obtener el color"
        })
    }
}

export const crearColor = async (req,res) => {
    try {
        const colorNuevo = new Color(req.body)
        await colorNuevo.save()
        res.status(201).json({mensaje:"El color fue creado"})
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se pudo crear el color"
        })
    }
}

export const borrarColor = async (req,res) => {
    try {
        const colorBuscado = await Color.findById(req.params.id)
        if (!colorBuscado) {
            return res.status(404).json({
                mensaje:"El color no fue encontrado"
            })
        }
        await Color.findByIdAndDelete(req.params.id)
        res.status(200).json({
            mensaje:"El color fue borrado"
        })
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se pudo borrar el color"
        })
    }
}

export const editarColor = async (req,res) => {
    try {
        const colorBuscado = await Color.findById(req.params.id)
        if (!colorBuscado) {
            return res.status(404).json({
                mensaje:"El color no fue encontrado"
            })
        }
        await Color.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            mensaje:"El color fue editado correctamente"
        })
    } catch (error) {
        console.error(error)
        res.status(404).json({
            mensaje: "Ocurrio un error, no se pudo editar el color"
        })
    }
}