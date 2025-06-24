let prompt = require('prompt-sync')();
let jogadorEscolha;
let jogadorNumero;
let computadorNumero;
let soma;
let vitorias = 0;

do {
    jogadorEscolha = prompt("Escolha par ou ímpar:").toLowerCase();
    jogadorNumero = parseInt(prompt("Digite um número entre 1 e 5:"));
    computadorNumero = Math.floor(Math.random() * 5) + 1;
    soma = jogadorNumero + computadorNumero;

    console.log(`Você: ${jogadorNumero}, Computador: ${computadorNumero}, Soma: ${soma}`);

    if ((soma % 2 === 0 && jogadorEscolha === "par") || (soma % 2 !== 0 && jogadorEscolha === "ímpar")) {
        console.log("Você venceu esta rodada!");
        vitorias++;
    } else {
        console.log("Você perdeu!");
        break;
    }
} while (true);

console.log(`Total de vitórias consecutivas: ${vitorias}`);