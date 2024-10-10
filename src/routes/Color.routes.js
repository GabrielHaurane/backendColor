import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores } from "../controllers/color.controllers.js";
import validacionColor from "../helpers/validacionesColor.js";

const colorRouter = Router();
colorRouter.route('/color').post([validacionColor],crearColor).get(listarColores)
colorRouter.route('/color/:id').delete(borrarColor).put(editarColor)

export default colorRouter