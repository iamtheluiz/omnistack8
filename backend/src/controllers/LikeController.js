const Dev = require('../models/Dev');

module.exports = {
  async store(req, res) {
    // Captura os dados dos desenvolvedores
    const { user } = req.headers;
    const { devId } = req.params;

    const loggedDev = await Dev.findById(user);
    const targetDev = await Dev.findById(devId);

    // Verifica se o desenvolvedor realmente existe
    if (!targetDev) {
      return res.status(400).json({ error: "dev not exists" }); // Bad request
    }

    if (targetDev.likes.includes(user)) {
      console.log('Match!');
    }

    // Adiciona um novo like
    loggedDev.likes.push(targetDev._id);

    await loggedDev.save();

    return res.json({ ok: true });
  }
}