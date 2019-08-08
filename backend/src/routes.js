const express = require('express');

// Cria um objeto de rotas do express
const routes = express.Router();

// Define a rota principal
routes.get('/', (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// Exporta as rotas
module.exports = routes;