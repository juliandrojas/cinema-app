import express from 'express';
import vistasRoutes from './routes/views.routes.js';
import morgan from 'morgan';
import path from 'path';
import session from 'express-session';

const app = express();

app.use(express.json());
app.use(morgan('dev'));

// Configuramos session
app.use(
  session({
    secret: 'secreto', // Cambia 'secreto' por una cadena aleatoria y segura
    resave: false,
    saveUninitialized: false
  })
);

app.use((req, res, next) => {
  if (!req.session) {
    return next(new Error('El middleware de sesión no está configurado correctamente'));
  }
  next();
});

// Configuramos EJS
app.set('view engine', 'ejs');
app.set('views', path.join(path.resolve(), 'views'));

// Usamos las rutas
app.use('/', vistasRoutes);

// Not found route
app.use((req, res, next) => {
  res.status(404).json({
    message: 'Endpoint not found'
  });
});

export default app;
