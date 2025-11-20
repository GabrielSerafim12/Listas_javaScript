let matriz2 = [];
let soma2 = 0;
for (let i = 0; i < 2; i++) {
matriz2[i] = [];
for (let j = 0; j < 2; j++) {
matriz2[i][j] = Number(prompt(`Matriz 2x2 - Valor [${i}][${j}]`));
soma2 += matriz2[i][j];
}
}
console.log("Soma elementos matriz 2x2:", soma2);