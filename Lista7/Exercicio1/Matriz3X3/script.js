let matriz1 = [];
for (let i = 0; i < 3; i++) {
matriz1[i] = [];
for (let j = 0; j < 3; j++) {
matriz1[i][j] = Number(prompt(`Matriz 3x3 - Valor [${i}][${j}]`));
}
}
console.log("Matriz 3x3:", matriz1);