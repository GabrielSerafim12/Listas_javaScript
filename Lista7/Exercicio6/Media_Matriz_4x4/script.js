let matriz6 = [];
let soma6 = 0;
for (let i = 0; i < 4; i++) {
matriz6[i] = [];
for (let j = 0; j < 4; j++) {
matriz6[i][j] = Number(prompt(`Valor [${i}][${j}]`));
soma6 += matriz6[i][j];
}
}
console.log("Média matriz 4x4:", soma6 / 16);