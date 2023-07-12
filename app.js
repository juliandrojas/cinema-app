import express from 'express';
import usuariosRoutes from './routes/user.routes.js';
import vistasRoutes from './routes/views.routes.js';
import morgan from 'morgan';
import path from 'path';
const app = express();
app.use(express.json());
app.use(morgan('dev'))
//Hacemos que entienda JSON
app.use(express.json());
//Configuramos EJS
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));
//Usamos las rutas
app.use('/api/', usuariosRoutes);
app.use('/', vistasRoutes);
//Not found route
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    })
})
export default app;