const express = require('express');

// Cria um objeto de rotas do express
const routes = express.Router();

// Define a rota principal
routes.get('/', (req, res) => {
  return res.send(`Hello ${req.query.name}`);
});

// Define a rota para cadastro de desenvolvedores
routes.post('/devs', (req, res) => {
  console.log(req.body);

  return res.json({ ok: true });
})

// Exporta as rotas
module.exports = routes;