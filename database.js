import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Cargamos las variables de entorno desde el archivo .env
dotenv.config();

const mongodbUri = process.env.MONGODB_URI;

mongoose.connect(mongodbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(db => console.log('Db is connected')).catch(error => console.error(error));
