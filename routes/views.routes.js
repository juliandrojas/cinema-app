import { Router } from 'express';
import { manageTickets, renderBuyTickets, renderDashboard, renderFilms, renderIndex, renderSchedules, renderTickets, unauthorizedAccess } from '../controllers/views.controller.js';
const router = Router();

// Routes
router.get('/', renderIndex);
router.get('/films', renderFilms);
router.get('/schedules', renderSchedules);
router.get('/tickets/login', renderTickets);
router.get('/tickets/dashboard', unauthorizedAccess); // Para mostrar la vista del dashboard (método GET)
router.post('/tickets/dashboard', renderDashboard); // Para procesar el formulario y registrar al usuario (método POST)
router.get('/tickets/dashboard/buy', renderBuyTickets);
router.get('/tickets/dashboard/manage', manageTickets)
export default router;