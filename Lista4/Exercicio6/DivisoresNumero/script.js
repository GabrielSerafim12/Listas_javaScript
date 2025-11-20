let num6 = Number(prompt("Digite um número e mostrarei seus divisores:"));
let i6 = 1;
do {
    if (num6 % i6 === 0) console.log(i6);
    i6++;
} while (i6 <= num6);