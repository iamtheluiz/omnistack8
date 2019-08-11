const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// Captura as rotas definidas
const routes = require('./routes');

// Cria servidor express
const app = express();
const port = 3333;  // Define a porta do servidor

// Inicia o servidor na porta desejada
const server = app.listen(port, () => {
  console.log(`Servidor rodando em "localhost:${port}"`);
});

// Inicia o websocket
const io = require('socket.io').listen(server);

// Armazena os usuários conectados
const connectedUsers = {};

// Ao ocorrer a conexão de um usuário
io.on("connection", socket => {
  const { user } = socket.handshake.query;

  connectedUsers[user] = socket.id;
});

// Middleware
app.use((req, res, next) => {
  req.io = io;
  req.connectedUsers = connectedUsers;

  return next();
});

// Define a conexão com o banco de dados
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://tinderdev:tinderdev@cluster0-msvvd.mongodb.net/tinderdev?retryWrites=true&w=majority')

app.use(cors());

// Define que o servidor deve esperar dados no formato JSON
app.use(express.json());

// Faz o express implementar as rotas
app.use(routes);