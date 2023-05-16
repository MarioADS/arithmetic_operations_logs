const exporess = require('express');
const routes = exporess.Router();

routes.get('/healtcheck', (req, res) => {
  return res.json({ message: 'hello friends from github actions, test!', status: "ok", code: 200 });
});

module.exports = routes;