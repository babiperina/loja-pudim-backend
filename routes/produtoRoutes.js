const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');
const authenticateToken = require('../middleware/authMiddleware');

router.get('/produtos', authenticateToken, produtoController.getProdutos);
router.post('/produtos', authenticateToken, produtoController.criarProduto);
router.get('/produtos/:id', authenticateToken, produtoController.getProdutoPorId);
router.put('/produtos/:id', authenticateToken, produtoController.atualizarProduto);
router.delete('/produtos/:id', authenticateToken, produtoController.removerProduto);


module.exports = router;
