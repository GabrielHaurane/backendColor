import mongoose, {Schema} from "mongoose";

const colorSchema = new Schema({
    nombreColor:{
        type: String,
        required:true,
        minLength: 3,
        maxLength: 20,
        unique: true,
    },
    codigoHexadecimal: {
        type: String,
        minLength:7,
        maxLength:7,
        match: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/, 
        default: null
      },
      codigoRGB: {
        type: String,
        match: /^rgb\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*\)$|^rgba\(\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*\d{1,3}\s*,\s*(0|1|0?\.\d+)\s*\)$/,
        minLength:5,
        maxLength:16,
        default: null
      }
})

const Color = mongoose.model('color', colorSchema)
export default Color;