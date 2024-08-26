// routes/authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Rota para registrar um novo usuário
router.post('/register', authController.registrarUsuario);

// Rota para autenticar um usuário
router.post('/login', authController.autenticarUsuario);

module.exports = router;
