const express = require('express');

// Cria servidor express
const server = express();
const port   = 3333;      // Define a porta do servidor

// Define a rota principal
server.get('/', (req, res) => {
  res.send('<h1>Index Page</h1>');
});

// Inicia o servidor na porta desejada
server.listen(port, () => {
  console.log(`Servidor rodando em "localhost:${port}"`);
});