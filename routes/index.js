var express = require('express');
var router = express.Router();
const usuarios = require('../models/users');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/', async function(req, res, next) {
  let body = req.body;
  console.log(body)

  const user = await usuarios.find({ username: body.username });
  
  console.log(user[0].username)

  if(user) {
    user[0].password === body.password ? res.render('users', {user: user[0]}) : res.redirect('/')
  }
});

module.exports = router;
