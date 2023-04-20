const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/operations_logs')
  .then( database => console.log('Database is conneted!') )
  .catch(error => console.error(`Database not connected: ${error.message}`) );