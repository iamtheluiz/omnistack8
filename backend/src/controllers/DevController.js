const axios = require('axios');
const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    // Pega o username do desenvolvedor
    const { username: user } = req.body;

    // Verifica se o usuário já está cadastrado
    const userExists = await Dev.findOne({ user });

    if (userExists){
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