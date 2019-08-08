const express = require('express');

// Controllers
const DevController = require('./controllers/DevController');
const LikeController = require('./controllers/LikeController');
const DislikeController = require('./controllers/DislikeController');

// Cria um objeto de rotas do express
const routes = express.Router();

routes.post('/devs', DevController.store);  // Define a rota para cadastro de desenvolvedores
routes.post('/devs/:devId/likes', LikeController.store);  // Define a rota para cadastro de likes
routes.post('/devs/:devId/dislikes', DislikeController.store);  // Define a rota para cadastro de dislikes


// Exporta as rotas
module.exports = routes;