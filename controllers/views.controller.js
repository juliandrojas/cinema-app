import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
//Importamos el modelo
import User from '../models/user.model.js';
//Importamos la conexión 
import '../database.js';
export const renderIndex = (req, res) => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);
    //Servimos la imagen
    const imagePath = path.join(__dirname, 'views/images/film-reel-146256_640-1842664233.png')
    res.sendFile(imagePath);
    //Servimos el html
    res.render('index.ejs', {title: 'Cinema App'});
    res.status(200)
}
export const renderFilms = (req, res) => {
    res.render('films.ejs', {title: 'Cinema App'});
    res.status(200)
}
export const renderSchedules = (req, res) => {
    res.render('schedules.ejs', {title: 'Cinema App'});
    res.status(200)
}
export const renderLogin = (req, res) => {
    res.render('login.ejs', {title: 'Cinema App'});
    res.status(200)
}
export const renderDashboard = async (req, res) => {
    //Recuperamos los datos que vienen del formulario
    const { nombre, correo, contrasena } = req.body;
    console.log(nombre," ",correo," ",contrasena);
    //Consultamos si el usuario está registrado en la base de datos
    try {
        const usuarioRegistrado = await User.findOne({ correo: correo });
        if(usuarioRegistrado) {
           // Si el usuario ya existe, mostramos un alert y luego redirigimos a la vista de compras
           res.render('welcome.ejs', { nombre: nombre, correo: correo, contrasena: contrasena }); 
           // Renderizar la vista welcome.ejs 
        } else {
            const nuevoUsuario = new User({
                nombre: nombre,
                correo: correo,
                contrasena: contrasena, // Asegúrate de definir la variable "contrasena" antes de utilizarla aquí
            });
            await nuevoUsuario.save();
            console.log('Usuario registrado:', nuevoUsuario);

            // Mostramos un alert y luego redirigimos al login
            res.render('registered.ejs'); // Renderizar la vista registered.ejs
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        return res.status(500).send('Error al registrar el usuario');
    }
}
// Ruta para la vista de compras
export const renderBuyTickets = (req, res) => {
    const { nombre, correo } = req.params;
    res.render('buyTickets.ejs', { title: 'Cinema App', nombre: nombre, correo: correo });
}
//Ruta para el proceso de compras
export const buyProcess = (req, res) => {
    //Recuperamos los datos que vienen del formulario
    const { nombre, correo, sede, pelicula, horario, personas } = req.body;
    console.log(
        nombre," ",
        correo," ",
        sede," ",
        pelicula," ",
        horario," ",
        personas," ");
    if(personas > 1) {
        res.render('generateTickets.ejs');
    }
}
export const unauthorizedAccess = (req, res) => {
    return res.render('unauthorizedAccess.ejs')
}