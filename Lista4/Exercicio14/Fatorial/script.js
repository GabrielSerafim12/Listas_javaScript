let num14 = Number(prompt("Digite um número para calcular o fatorial:"));
let fat14 = 1, i14 = num14;
do {
    fat14 *= i14;
    i14--;
} while (i14 > 0);
console.log(`Fatorial de ${num14} =`, fat14);