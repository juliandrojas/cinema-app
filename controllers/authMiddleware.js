import session from 'express-session'
export const requireAuthRedirect = (req, res, next) => {
    if (!req.session.isAuthenticated) {
        res.redirect('/tickets/login'); // Cambia la ruta de redirección según tu implementación de inicio de sesión
    } else {
        next();
    }
};
