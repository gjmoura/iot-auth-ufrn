const mongoose = require('mongoose');

const usuarios = new mongoose.Schema({
  username: String,
  nome: String,
  sobrenome: String,
  password: String,
  cpf: String,
  idade: Number,
});

module.exports = mongoose.model('usuarios', usuarios);