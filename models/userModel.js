const db = require('../database/db');

// Obter todos os produtos
const getAllUsers = (callback) => {
    const sql = 'SELECT * FROM Usuarios';
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
    });
};

// Adicionar um novo produto
const addUser = (user, callback) => {
    const { nome, email, senha } = user;
    const sql = 'INSERT INTO Usuarios (nome, email, senha) VALUES (?, ?, ?)';
    const params = [nome, email, senha];
    db.run(sql, params, function(err) {
        callback(err, { id: this.lastID });
    });
};

module.exports = { getAllUsers, addUser };
