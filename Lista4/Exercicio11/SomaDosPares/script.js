let num11 = Number(prompt("Digite um número:"));
let i11 = 1, soma11 = 0;
do {
    if (i11 % 2 === 0) soma11 += i11;
    i11++;
} while (i11 <= num11);
console.log("Soma dos pares:", soma11);
