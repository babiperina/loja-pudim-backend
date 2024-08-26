// controllers/produtoController.js

const userModel = require('../models/userModel');

const getUsers = (req, res) => {
    userModel.getAllUsers((err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else {
            res.json({ "message": "sucesso", "data": rows });
        }
    });
};

const addUser = (req, res) => {
    const newUser = req.body;
    userModel.addUser(newUser, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else {
            res.json({ "message": "sucesso", "data": result });
        }
    });
};

module.exports = { getUsers, addUser };
