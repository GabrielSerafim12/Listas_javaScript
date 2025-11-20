// 7) Primo
let nPrimo = Number(prompt("Número:"));
let divisor = 1;
let qtdDiv = 0;
while (divisor <= nPrimo) {
if (nPrimo % divisor === 0) qtdDiv++;
divisor++;
}
console.log(qtdDiv === 2 ? "Primo" : "Não primo");