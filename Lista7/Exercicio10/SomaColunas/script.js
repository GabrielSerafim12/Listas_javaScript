let matriz10 = [];
let somaCol = [0,0,0,0];
for (let i = 0; i < 4; i++) {
matriz10[i] = [];
for (let j = 0; j < 4; j++) {
matriz10[i][j] = Number(prompt(`Valor [${i}][${j}]`));
somaCol[j] += matriz10[i][j];
}
}
console.log("Soma colunas:", somaCol);