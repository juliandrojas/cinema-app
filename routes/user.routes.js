import { Router } from "express";
import { crearUsuario, createUser } from '../controllers/user.controller.js';
const router = Router();
//Routes
router.get('/crearUsuario', crearUsuario);
/*
router.get('/usuarios/:id', getUsuarioById);
router.get('/usuarios/:correo/:contrasena', getUsuarioByCredentials);
router.post('/usuarios', crearUsuarios)
router.patch('/usuarios/:id', actualizarUsuarios)
router.delete('/usuarios/:id', eliminarUsuarios)*/
export default router;