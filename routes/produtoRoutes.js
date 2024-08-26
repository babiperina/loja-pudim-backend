const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/produtos', produtoController.getProdutos);
router.post('/produtos', produtoController.criarProduto);
router.get('/produtos/:id', produtoController.getProdutoPorId);
router.put('/produtos/:id', produtoController.atualizarProduto);
router.delete('/produtos/:id', produtoController.removerProduto);


module.exports = router;
