import { Router } from 'express';
import { buyProcess, renderBuyTickets, renderDashboard, renderFilms, renderIndex, renderLogin, renderSchedules, unauthorizedAccess } from '../controllers/views.controller.js';
const router = Router();

// Routes
router.get('/', renderIndex);
router.get('/films', renderFilms);
router.get('/schedules', renderSchedules);
router.get('/tickets/login', renderLogin);
router.get('/tickets/dashboard', unauthorizedAccess); // Para mostrar la vista del dashboard (método GET)
//router.post('/tickets/dashboard', renderDashboard); // Para procesar el formulario y registrar al usuario (método POST)
//Ruta del dashboard
router.post('/tickets/dashboard/', renderDashboard);
//Ruta de las compras
router.get('/tickets/buy/:nombre/:correo', renderBuyTickets);
router.post('/tickets/buy/success', buyProcess);
export default router;