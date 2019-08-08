const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async index(req, res) {
    const { user } = req.headers;

    // Captura as informações do desenvolvedor conectado
    const loggedDev = await Dev.findById(user);

    // Filtra os usuários que serão registrados
    const users = await Dev.find({
      $and: [
        { _id: { $ne: user } },
        { _id: { $nin: loggedDev.likes } },
        { _id: { $nin: loggedDev.dislikes } },
      ]
    });

    return res.json(users);
  },
  async store(req, res) {
    // Pega o username do desenvolvedor
    const { username: user } = req.body;

    // Verifica se o usuário já está cadastrado
    const userExists = await Dev.findOne({ user });

    if (userExists) {
      return res.json(userExists);
    }

    // Procura o usuário na API do GitHub
    const response = await axios.get(`https://api.github.com/users/${user}`);

    // Captura as informações necessárias
    const { name, bio, avatar_url: avatar } = response.data;

    // Armazena o desenvolvedor
    const dev = await Dev.create({
      name,
      user,
      bio,
      avatar
    })

    return res.json(dev);
  }
};