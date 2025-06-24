let prompt = require('prompt-sync')();
let total = 0;
let valor;

do {
    valor = parseFloat(prompt("Digite o valor da compra (ou 0 para encerrar):"));
    if (!isNaN(valor) && valor > 0) {
        total += valor;
    }
} while (valor !== 0);

let formaPagamento = prompt("Deseja pagar em dinheiro ou no cartão?").toLowerCase();

switch (formaPagamento) {
    case "dinheiro":
        total *= 0.9; // 10% de desconto
        console.log(`Total a pagar com desconto: R$ ${total.toFixed(2)}`);
        break;
    case "cartão":
    case "cartao":
        console.log(`Total a pagar: R$ ${total.toFixed(2)}`);
        break;
    default:
        console.log("Forma de pagamento inválida.");
}