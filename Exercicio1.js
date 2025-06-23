let prompt = require('prompt-sync')();

let num;

do {
  num = parseInt(prompt("Digite um número entre 1 e 20 para ver a tabuada (ou 0 para sair):"));

  if (num === 0) {
    console.log("Saindo do programa. Até mais!");
    break; // Sai do loop
  }

  if (num >= 1 && num <= 20) {
    let resultado = `Tabuada do ${num}:\n`;
    for (let i = 1; i <= 10; i++) {
      resultado += `${num} x ${i} = ${num * i}\n`;
    }
    console.log(resultado);
  } else {
    console.log("Número inválido! Por favor, digite um número entre 1 e 20.");
  }
} while (num !== 0);