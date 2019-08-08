const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Captura as rotas definidas
const routes = require('./routes');

// Cria servidor express
const server = express();
const port = 3333;  // Define a porta do servidor

// Define a conexão com o banco de dados
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://tinderdev:tinderdev@cluster0-msvvd.mongodb.net/tinderdev?retryWrites=true&w=majority')

server.use(cors());

// Define que o servidor deve esperar dados no formato JSON
server.use(express.json());

// Faz o express implementar as rotas
server.use(routes);

// Inicia o servidor na porta desejada
server.listen(port, () => {
  console.log(`Servidor rodando em "localhost:${port}"`);
});