const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const operationLog = new Schema({
  operation: { type: String },
  value1: { type: Number },
  value2: { type: Number },
  result: { type: Number }
});

module.exports = mongoose.model('OperationLog', operationLog);