const express = require('express');

// Captura as rotas definidas
const routes = require('./routes');

// Cria servidor express
const server = express();
const port = 3333;  // Define a porta do servidor

// Define que o servidor deve esperar dados no formato JSON
server.use(express.json());

// Faz o express implementar as rotas
server.use(routes);

// Inicia o servidor na porta desejada
server.listen(port, () => {
  console.log(`Servidor rodando em "localhost:${port}"`);
});