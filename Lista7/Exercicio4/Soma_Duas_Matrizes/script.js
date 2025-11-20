let A4 = [], B4 = [], soma4 = [];
for (let i = 0; i < 2; i++) {
A4[i] = []; B4[i] = []; soma4[i] = [];
for (let j = 0; j < 2; j++) {
A4[i][j] = Number(prompt(`A[${i}][${j}]`));
B4[i][j] = Number(prompt(`B[${i}][${j}]`));
soma4[i][j] = A4[i][j] + B4[i][j];
}
}
console.log("Soma matrizes 2x2:", soma4);