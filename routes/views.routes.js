import { renderBuyTickets, renderFilms, renderIndex, renderSchedules, renderTickets, renderDashboard } from '../controllers/views.controller.js';
import { requireAuthRedirect } from '../controllers/authMiddleware.js';
import { Router } from 'express';

const router = Router();

// Routes
router.get('/', renderIndex);
router.get('/films', renderFilms);
router.get('/schedules', renderSchedules);
router.get('/tickets/login', renderTickets);
router.post('/tickets/dashboard', requireAuthRedirect, renderDashboard);
/*
router.get('/usuarios/:id', getUsuarioById);
router.get('/usuarios/:correo/:contrasena', getUsuarioByCredentials);
router.post('/usuarios', crearUsuarios)
router.patch('/usuarios/:id', actualizarUsuarios)
router.delete('/usuarios/:id', eliminarUsuarios)*/
export default router;