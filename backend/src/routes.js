const express = require('express');

// Controllers
const DevController = require('./controllers/DevController');

// Cria um objeto de rotas do express
const routes = express.Router();

// Define a rota para cadastro de desenvolvedores
routes.post('/devs', DevController.store);

// Exporta as rotas
module.exports = routes;