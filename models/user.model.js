import { Schema, model } from 'mongoose';
//Creamos el esquema del producto
const userSchema = new Schema({
    nombre: {
        type: String,
        required: true
    },
    correo: {
        type: String, 
        required: true
    },
    contrasena: {
        type: String,
        required: true
    },
    fechaRegistro: {
        type: Date,
        default: Date.now
    }
});
export default model('User', userSchema);