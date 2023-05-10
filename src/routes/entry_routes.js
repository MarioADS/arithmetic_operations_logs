const exporess = require('express');
const routes = exporess.Router();

routes.get('/healtcheck', (req, res) => {
  return res.json({ message: 'hello liverpool from github actions', status: "ok" });
});

module.exports = routes;