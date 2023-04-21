const exporess = require('express');
const routes = exporess.Router();

routes.get('/healtcheck', (req, res) => {
  return res.json({ message: 'hello from digital ocean server', status: "ok" });
});

module.exports = routes;