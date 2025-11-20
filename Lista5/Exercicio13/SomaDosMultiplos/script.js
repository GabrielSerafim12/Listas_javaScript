let n13 = Number(prompt("Digite um número:"));
let soma13 = 0;
for (let i = 1; i <= n13; i++) {
    if (i % 3 === 0) soma13 += i;
}
console.log("Soma dos múltiplos de 3 =", soma13);