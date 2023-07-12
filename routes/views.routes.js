import { Router } from "express";
import { renderBuyTickets, renderFilms, renderIndex, renderSchedules, renderTickets } from '../controllers/views.controller.js';
const router = Router();
//Routes
router.get('/', renderIndex);
router.get('/films', renderFilms);
router.get('/schedules', renderSchedules)
router.get('/tickets', renderTickets)
router.get('/tickets/buy', renderBuyTickets)
/*
router.get('/usuarios/:id', getUsuarioById);
router.get('/usuarios/:correo/:contrasena', getUsuarioByCredentials);
router.post('/usuarios', crearUsuarios)
router.patch('/usuarios/:id', actualizarUsuarios)
router.delete('/usuarios/:id', eliminarUsuarios)*/
export default router;