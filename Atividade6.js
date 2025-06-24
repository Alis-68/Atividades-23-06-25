let prompt = require('prompt-sync')();
let inicio = parseInt(prompt("Digite o número inicial:"));
let fim = parseInt(prompt("Digite o número final:"));

if (inicio < fim) {
    for (let i = inicio; i <= fim; i++) {
        if (i % 2 === 0) {
            console.log(`${i} é par`);
        } else {
            console.log(`${i} é ímpar`);
        }
    }
} else {
    console.log("O número inicial deve ser menor que o final.");
}