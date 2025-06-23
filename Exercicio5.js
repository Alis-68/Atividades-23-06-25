let prompt = require('prompt-sync')();


const numeroSecreto = Math.floor(Math.random() * 100) + 1; // 1 a 100
let palpite;
let tentativas = 0;

do {
  palpite = parseInt(prompt("Tente adivinhar o número entre 1 e 100:"));
  tentativas++;

  if (isNaN(palpite)) {
    console.log("Por favor, digite um número válido.");
    continue;
  }

  if (palpite > numeroSecreto) {
    console.log("O número é menor. Tente novamente.");
  } else if (palpite < numeroSecreto) {
    console.log("O número é maior. Tente novamente.");
  } else {
    console.log(`Parabéns! Você acertou em ${tentativas} tentativa(s).`);
  }
} while (palpite !== numeroSecreto);
