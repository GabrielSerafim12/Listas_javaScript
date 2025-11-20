let num7 = Number(prompt("Digite um número para verificar se é primo:"));
let i7 = 1, divisores7 = 0;
do {
    if (num7 % i7 === 0) divisores7++;
    i7++;
} while (i7 <= num7);

console.log(divisores7 === 2 ? "É primo" : "Não é primo");