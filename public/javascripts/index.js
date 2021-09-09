async function valida() {
  let login = document.getElementById('login');
  let senha = document.getElementById('password');

  const user = await usuarios.find({username: `${login.value}`});
  

}

