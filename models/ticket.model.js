import { Schema, model } from 'mongoose';

const funcionSchema = new Schema({
  pelicula: {
    type: String,
    required: true
  },
  hora: {
    type: String,
    required: true
  },
  cine: {
    type: String,
    required: true
  },
  sala: {
    type: String,
    required: true
  }
});

const boletaSchema = new Schema({
  cliente: {
    nombre: {
      type: String,
      required: true
    },
    correo: {
      type: String,
      required: true
    },
    ciudad: {
      type: String,
      required: true
    },
  },
  funcion: funcionSchema,
  fechaRegistro: {
    type: Date,
    default: Date.now
  }
});

boletaSchema.virtual('fechaRegistroFormatted').get(function () {
  // Obtiene la fecha en formato ISO y luego extrae solo la parte de la fecha (año, mes y día)
  return this.fechaRegistro.toISOString().split('T')[0];
});

export default model('Boleta', boletaSchema);
