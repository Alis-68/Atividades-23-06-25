let prompt = require('prompt-sync')();
let notas = [];
let nota;

do {
    nota = parseFloat(prompt("Digite a nota do aluno (ou -1 para encerrar):"));
    if (nota >= 0 && nota <= 10) {
        notas.push(nota);
    } else if (nota !== -1) {
        console.log("Nota inválida. Digite um valor entre 0 e 10.");
    }
} while (nota !== -1);

if (notas.length > 0) {
    let somaNotas = notas.reduce((a, b) => a + b, 0);
    let media = somaNotas / notas.length;
    let maiorNota = Math.max(...notas);
    let acimaDeSete = notas.filter(nota => nota > 7).length;

    console.log(`Média geral: ${media.toFixed(2)}`);
    console.log(`Maior nota: ${maiorNota}`);
    console.log(`Notas acima de 7: ${acimaDeSete}`);
} else {
    console.log("Nenhuma nota foi inserida.");
}