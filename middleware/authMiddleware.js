// middleware/authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Obtém o token Bearer

    if (token == null) return res.sendStatus(401); // Se não houver token, não autorizado

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) return res.sendStatus(403); // Se o token não for válido, proibido
        req.user = user;
        next();
    });
};

module.exports = authenticateToken;
