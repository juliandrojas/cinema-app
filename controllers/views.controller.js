import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import '../database.js';
//Importamos el modelo
import User from '../models/user.model.js';

//Importamos la conexión 
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
export const renderTickets = (req, res) => {
    res.render('tickets.ejs', {title: 'Cinema App'});
    res.status(200)
}
export const renderDashboard = async (req, res) => {
    // Obtenemos los datos enviados desde el formulario
    const { nombre, correo, contrasena } = req.body;
    try {
        // Buscar al usuario por su correo electrónico en la base de datos
        const usuarioExistente = await User.findOne({ correo: correo });
        if (usuarioExistente) {
            // Si el usuario ya existe, redirigimos al dashboard con el nombre de usuario y el correo en la URL
            return res.redirect(`/dashboard?username={username}&email={email}`)
            //return res.render('dashboard.ejs', { nombre: nombre });
        } else {
            // Si el usuario no existe, lo registramos en la base de datos
            const nuevoUsuario = new User({
                nombre: nombre,
                correo: correo,
                contrasena: contrasena,
            });

            // Guardar el nuevo usuario en la base de datos
            await nuevoUsuario.save();
            console.log('Usuario registrado:', nuevoUsuario);

            //Renderizamos el dashboard al registrar el usuario
            return res.render('dashboard.ejs', { nombre: nombre });
        }
    } catch (error) {
        console.error('Error al registrar el usuario:', error);
        return res.status(500).send('Error al registrar el usuario');
    }
}

export const showDashboard = (req, res) => {
    // Aquí puedes incluir cualquier lógica adicional antes de renderizar la vista del dashboard
    return res.render('dashboard.ejs', { nombre: req.body.nombre, correo: req.body.correo });
}
export const renderBuyTickets = (req, res) => {
    res.render('buyTickets.ejs', {title: 'Cinema App', nombre: req.body.nombre, correo: req.body.correo});
    res.status(200)
}
export const manageTickets = (req, res) => {
    return res.status(500).send('Manage Tickets')
}
export const unauthorizedAccess = (req, res) => {
    return res.render('unauthorizedAccess.ejs')
}