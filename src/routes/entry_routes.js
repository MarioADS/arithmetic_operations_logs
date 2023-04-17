const exporess = require('express');
const routes = exporess.Router();
const OperationLog = require('../schemas/operations_logs');

routes.get('/healtcheck', (req, res) => {
  return res.json({ message: 'hello', status: "ok" });
});

routes.get('/operations', async (req, res) => {
  const operations = await OperationLog.find();
  return res.json({ operations });
})

module.exports = routes;