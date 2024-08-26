// // Conectar ao banco de dados
// const db = new sqlite3.Database('../../database/loja_pudim', (err) => {
//     if (err) {
//         console.error('Erro ao conectar ao banco de dados:', err.message);
//     } else {
//         console.log('Conectado ao banco de dados SQLite.');
//     }
// });

require('dotenv').config(); // Adicione esta linha no início do arquivo

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;
const produtoRoutes = require('./routes/produtoRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');


// Configurar o middleware CORS
app.use(cors({
    origin: 'http://localhost:3001', // Permitir requisições do frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization, Content-Type']
}));

app.use(express.json());

// Usar rotas
app.use('/api', produtoRoutes);
app.use('/api', userRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

