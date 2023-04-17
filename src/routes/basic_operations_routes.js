const express = require('express');
const routes = express.Router();
const OperationLog = require('../schemas/operations_logs');

routes.post('/addition', (req, res) => {
  const { value1, value2 } = req.body;
  let result = value1 + value2;
  let operationLog = new OperationLog({
    operation: 'addition',
    value1,
    value2,
    result
  });
  operationLog.save().then( result => console.info('Log adition saved!') ).catch(err => console.error(err.message) );
  return res.json({ result });
});

routes.post('/substraction', (req, res) => {
  const { value1, value2 } = req.body;
  let result = value1 - value2;
  let operationLog = new OperationLog({
    operation: 'substraction',
    value1,
    value2,
    result
  });
  operationLog.save().then( result => console.info('Log substraction saved!') ).catch(err => console.error(err.message) );
  return res.json({ result });
});

routes.post('/multiplication', (req, res) => {
  const { value1, value2 } = req.body;
  let result = value1 * value2;
  let operationLog = new OperationLog({
    operation: 'multiplication',
    value1,
    value2,
    result
  });
  operationLog.save().then( result => console.info('Log multiplication saved!') ).catch(err => console.error(err.message) );
  return res.json({ result });
});

routes.post('/division', (req, res) => {
  const { value1, value2 } = req.body;
  let result = value1 / value2;
  let operationLog = new OperationLog({
    operation: 'division',
    value1,
    value2,
    result
  });
  operationLog.save().then( result => console.info('Log division saved!') ).catch(err => console.error(err.message) );
  return res.json({ result });
});

module.exports = routes;