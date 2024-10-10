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
    check("codigoHexadecimal")
    .isLength({
        min:7,
        max:7
    })
    .withMessage("la cantidad de caracteres validos son 7")
    ,
    check("codigoRGB")
    .isLength({
        min:5,
        max:16,
    })
    .withMessage("la cantidad de caracteres como minimo es 5 y maximo 16"),
    (req,res,next)=> resultadoValidacion(req,res,next)
];
export default validacionColor;