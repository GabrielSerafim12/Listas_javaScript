// 4) Média de 5 números
let count = 1;
let soma = 0;
while (count <= 5) {
let num = Number(prompt("Digite um número:"));
soma += num;
count++;
}
console.log("Média: " + soma / 5);