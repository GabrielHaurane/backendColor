import { Router } from "express";
import { borrarColor, crearColor, editarColor, listarColores } from "../controllers/color.controllers.js";

const colorRouter = Router();
colorRouter.route('/color').post(crearColor).get(listarColores)
colorRouter.route('/color/:id').delete(borrarColor).put(editarColor)

export default colorRouter