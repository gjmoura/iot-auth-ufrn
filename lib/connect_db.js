const mongoose = require('mongoose');
let db;

module.exports = function() {
  if(!db) {
    db = mongoose.connect('mongodb://localhost/usuarios');
  }

  return db
}