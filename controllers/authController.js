// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../database/db');

const SECRET_KEY = 'substitua_seu_segredo_aqui'; // Substitua com uma chave secreta real

const registrarUsuario = (req, res) => {
    const { nome, email, senha } = req.body;

    const hashedPassword = bcrypt.hashSync(senha, 8);

    const sql = 'INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)';
    const params = [nome, email, hashedPassword];

    db.run(sql, params, function(err) {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else {
            res.status(201).json({ "message": "Usuário criado com sucesso", "id": this.lastID });
        }
    });
};

const autenticarUsuario = (req, res) => {
    const { email, senha } = req.body;

    const sql = 'SELECT * FROM Usuarios WHERE email = ?';
    db.get(sql, [email], (err, user) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else if (!user || !bcrypt.compareSync(senha, user.senha)) {
            res.status(401).json({ "message": "Credenciais inválidas" });
        } else {
            const token = jwt.sign({ id: user.id }, SECRET_KEY, { expiresIn: '1h' });
            res.json({ "message": "Autenticado com sucesso", "token": token });
        }
    });
};

module.exports = { registrarUsuario, autenticarUsuario };
