
const express = require('express');

const app = express();

const PORT = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao site da Marvel e DC!');
});

// Rota Marvel
app.get('/marvel', (req, res) => {
    res.send('Este é o universo de heróis da Marvel.');
});

// Rota DC
app.get('/dc', (req, res) => {
    res.send('Este é o universo de heróis da DC.');
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
