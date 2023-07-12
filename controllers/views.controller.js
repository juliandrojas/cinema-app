import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';
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
export const renderBuyTickets = (req, res) => {
    res.render('buyTickets.ejs', {title: 'Cinema App'});
    res.status(200)
}