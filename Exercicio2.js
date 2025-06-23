
let prompt = require('prompt-sync')();

let opcao;

do {
  opcao = prompt(
    "Menu de Operações Matemáticas:\n" +
    "1 - Adição\n" +
    "2 - Subtração\n" +
    "3 - Multiplicação\n" +
    "4 - Divisão\n" +
    "5 - Sair\n\n" +
    "Escolha uma opção:"
  );

  switch (opcao) {
    case "1":
      var num1 = parseFloat(prompt("Digite o primeiro número:"));
      var num2 = parseFloat(prompt("Digite o segundo número:"));
      console.log(`Resultado: ${num1} + ${num2} = ${num1 + num2}`);
      break;

    case "2":
      var num1 = parseFloat(prompt("Digite o primeiro número:"));
      var num2 = parseFloat(prompt("Digite o segundo número:"));
      console.log(`Resultado: ${num1} - ${num2} = ${num1 - num2}`);
      break;

    case "3":
      var num1 = parseFloat(prompt("Digite o primeiro número:"));
      var num2 = parseFloat(prompt("Digite o segundo número:"));
      console.log(`Resultado: ${num1} * ${num2} = ${num1 * num2}`);
      break;

    case "4":
      var num1 = parseFloat(prompt("Digite o primeiro número:"));
      var num2 = parseFloat(prompt("Digite o segundo número:"));
      if (num2 !== 0) {
        console.log(`Resultado: ${num1} / ${num2} = ${num1 / num2}`);
      } else {
        console.log("Erro: divisão por zero não é permitida.");
      }
      break;

    case "5":
      console.log("Saindo do programa...");
      break;

    default:
      console.log("Opção inválida! Tente novamente.");
  }
} while (opcao !== "5");