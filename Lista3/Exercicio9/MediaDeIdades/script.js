// 9) Média de idades
let n = 1;
let somaId = 0;
while (n <= 5) {
let idade = Number(prompt("Idade:"));
somaId += idade;
n++;
}
console.log("Média das idades: " + somaId / 5);