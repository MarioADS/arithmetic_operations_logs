const express = require('express');
const app = express();
const routes = require('./routes');

require('./database/connect');

app.use( express.json() );
app.use( '/', routes );

app.set('PORT', 3000);

module.exports = app;