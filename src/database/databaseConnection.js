import mongoose, { mongo } from "mongoose";

const mongodb = process.env.MONGODB
mongoose.connect(mongodb)
const connexion = mongoose.connection;
connexion.once('open', ()=>{
    console.info('BD CONECTADA')
})