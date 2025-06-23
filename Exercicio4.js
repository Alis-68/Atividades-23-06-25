let prompt = require('prompt-sync')();
const senhaCorreta = "12345"; // Defina aqui a senha correta
let tentativa = 0;
let acessoLiberado = false;

while (tentativa < 3) {
  let senha = prompt("Digite a senha:");

  if (senha === senhaCorreta) {
    console.log("Bem-vindo!");
    acessoLiberado = true;
    break; // Sai do loop ao acertar a senha
  } else {
    tentativa++;
    console.log(`Senha incorreta. Tentativa ${tentativa} de 3.`);
  }
}

if (!acessoLiberado) {
  console.log("Acesso bloqueado.");
}
