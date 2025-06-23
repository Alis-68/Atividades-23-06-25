let prompt = require('prompt-sync')();


do {
  let pares = 0;
  let impares = 0;

  for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt(`Digite o ${i}º número:`));

    if (isNaN(num)) {
      console.log("Número inválido! Por favor, digite um número válido.");
      i--; // repete esta iteração
      continue;
    }

    if (num % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }

  console.log(`Quantidade de números pares: ${pares}\nQuantidade de números ímpares: ${impares}`);

} while (console.log("Deseja repetir o programa?"));
