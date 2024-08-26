// controllers/produtoController.js

const produtoModel = require('../models/produtoModel');

const getProdutos = (req, res) => {
    produtoModel.getAllProducts((err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else {
            res.json({ "message": "sucesso", "data": rows });
        }
    });
};

const criarProduto = (req, res) => {
    const novoProduto = req.body;
    produtoModel.addProduct(novoProduto, (err, result) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else {
            res.json({ "message": "sucesso", "data": result });
        }
    });
};

const getProdutoPorId = (req, res) => {
    const id = req.params.id;
    produtoModel.getProdutoPorId(id, (err, row) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else if (row) {
            res.json({ "message": "sucesso", "data": row });
        } else {
            res.status(404).json({ "message": "Produto não encontrado" });
        }
    });
};

const atualizarProduto = (req, res) => {
    const id = req.params.id;
    const produtoAtualizado = req.body;

    produtoModel.atualizarProduto(produtoAtualizado, id, (err, changes) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else if (changes === 0) {
            res.status(404).json({ "message": "Produto não encontrado" });
        } else {
            res.json({ "message": "Produto atualizado com sucesso" });
        }
    });
};

const removerProduto = (req, res) => {
    const id = req.params.id;
    produtoModel.removerProduto(id, (err, changes) => {
        if (err) {
            res.status(400).json({ "error": err.message });
        } else if (changes === 0) {
            res.status(404).json({ "message": "Produto não encontrado" });
        } else {
            res.json({ "message": "Produto removido com sucesso" });
        }
    });
};

const addProduct = (req, res) => {
    const id = req.params.id;

    // Supondo que o `produtoModel` tenha um método para buscar o produto pelo ID
    produtoModel.getProdutoPorId(id, (err, produto) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }

        if (!produto) {
            return res.status(404).json({ "message": "Produto não encontrado" });
        }

        const quantidadeAtualizada = produto.quantidade_em_estoque + 1;

        produtoModel.atualizarProduto({ ...produto, quantidade_em_estoque: quantidadeAtualizada }, id, (err, changes) => {
            if (err) {
                return res.status(400).json({ "error": err.message });
            }

            res.json({ "message": "Quantidade do produto aumentada com sucesso" });
        });
    });
};

const removeProduct = (req, res) => {
    const id = req.params.id;

    // Supondo que o `produtoModel` tenha um método para buscar o produto pelo ID
    produtoModel.getProdutoPorId(id, (err, produto) => {
        if (err) {
            return res.status(400).json({ "error": err.message });
        }

        if (!produto) {
            return res.status(404).json({ "message": "Produto não encontrado" });
        }

        const quantidadeAtualizada = produto.quantidade_em_estoque - 1;

        produtoModel.atualizarProduto({ ...produto, quantidade_em_estoque: quantidadeAtualizada }, id, (err, changes) => {
            if (err) {
                return res.status(400).json({ "error": err.message });
            }

            res.json({ "message": "Quantidade do produto diminuida com sucesso" });
        });
    });
};

module.exports = { getProdutos, criarProduto, getProdutoPorId, atualizarProduto, removerProduto, addProduct, removeProduct };
