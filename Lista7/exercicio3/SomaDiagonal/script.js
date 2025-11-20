let matriz3 = [];
let somaDiag3 = 0;
for (let i = 0; i < 3; i++) {
matriz3[i] = [];
for (let j = 0; j < 3; j++) {
matriz3[i][j] = Number(prompt(`Matriz 3x3 - Valor [${i}][${j}]`));
}
}
for (let i = 0; i < 3; i++) somaDiag3 += matriz3[i][i];
console.log("Soma diagonal principal:", somaDiag3);