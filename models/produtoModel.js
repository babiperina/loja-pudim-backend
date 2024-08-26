const db = require('../database/db');

// Obter todos os produtos
const getAllProducts = (callback) => {
    const sql = 'SELECT * FROM Produtos';
    db.all(sql, [], (err, rows) => {
        callback(err, rows);
    });
};

// Adicionar um novo produto
const addProduct = (produto, callback) => {
    const { nome, descricao, preco, quantidade_em_estoque } = produto;
    const sql = 'INSERT INTO Produtos (nome, descricao, preco, quantidade_em_estoque) VALUES (?, ?, ?, ?)';
    const params = [nome, descricao, preco, quantidade_em_estoque];
    db.run(sql, params, function(err) {
        callback(err, { id: this.lastID });
    });
};

// Obter um produto específico por ID
const getProdutoPorId = (id, callback) => {
    const sql = 'SELECT * FROM Produtos WHERE id = ?';
    db.get(sql, [id], (err, row) => {
        callback(err, row);
    });
};

// Atualizar um produto existente
const atualizarProduto = (produto, id, callback) => {
    const { nome, descricao, preco, quantidade_em_estoque } = produto;
    const sql = `
        UPDATE Produtos
        SET nome = ?, descricao = ?, preco = ?, quantidade_em_estoque = ?, data_atualizacao = CURRENT_TIMESTAMP
        WHERE id = ?
    `;
    const params = [nome, descricao, preco, quantidade_em_estoque, id];
    db.run(sql, params, function(err) {
        callback(err, this.changes);
    });
};

// Remover um produto por ID
const removerProduto = (id, callback) => {
    const sql = 'DELETE FROM Produtos WHERE id = ?';
    db.run(sql, [id], function(err) {
        callback(err, this.changes);
    });
};

module.exports = { getAllProducts, addProduct, getProdutoPorId, atualizarProduto, removerProduto };
