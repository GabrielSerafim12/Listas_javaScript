let macas = Number(prompt("Quantidade de maçãs:"));
let precoMaca = macas < 12 ? 0.5 : 0.4;
let totalMacas = macas * precoMaca;
console.log("Total: R$" + totalMacas.toFixed(2));