const express = require('express');

// Captura as rotas definidas
const routes = require('./routes');

// Cria servidor express
const server = express();
const port   = 3333;      // Define a porta do servidor

// Faz o express implementar as rotas
server.use(routes);

// Inicia o servidor na porta desejada
server.listen(port, () => {
  console.log(`Servidor rodando em "localhost:${port}"`);
});