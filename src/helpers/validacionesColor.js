import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidaciones.js";

const validacionColor = [
    check("nombreColor")
    .notEmpty()
    .withMessage("El color es un dato obligatorio")
    .isLength({
        min:3,
        max:20,
    })
    .withMessage("el color debe contener como minimo 3 y maximo 20 caracteres"),
    (req,res,next)=> resultadoValidacion(req,res,next)
];
export default validacionColor;