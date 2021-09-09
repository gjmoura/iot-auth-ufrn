var express = require('express');
var router = express.Router();
const usuarios = require('../models/users');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cadastro');
});

router.post('/', function(req, res, next) {
  const body = req.body;
  let novoUser = new usuarios({
    username: body.username,
    nome: body.nome,
    sobrenome: body.sobrenome,
    cpf: body.cpf,
    idade: body.idade,
    password: body.password
  })
  console.log(novoUser)
  novoUser.save();
  res.render('users', {user: novoUser}) 
});



module.exports = router;
