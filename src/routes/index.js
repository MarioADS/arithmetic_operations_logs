const express = require('express');
const routes = express();

const prefix = '/api';

const basic_operations_routes = require('./basic_operations_routes');
const entry_routes = require('./entry_routes');

routes.use( prefix, basic_operations_routes );
routes.use( entry_routes );

module.exports = routes;