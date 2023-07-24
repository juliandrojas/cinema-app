import { Schema, model } from 'mongoose';

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

userSchema.virtual('fechaRegistroFormatted').get(function () {
    // Obtiene la fecha en formato ISO y luego extrae solo la parte de la fecha (año, mes y día)
    return this.fechaRegistro.toISOString().split('T')[0];
});

export default model('User', userSchema);
