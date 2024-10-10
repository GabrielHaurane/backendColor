import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path"
import {fileURLToPath} from "url"
import './src/database/databaseConnection.js'
import colorRouter from "./src/routes/Color.routes.js";

const app = express();
// 1
app.set("port", process.env.PORT || 4000)
app.listen(app.get("port"),()=>{
    console.info("estoy escuchando el puento "+app.get('port'))
})
// 2
app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.use(express.static(path.join(__dirname,'/public')))
// 3
app.use('/api', colorRouter)