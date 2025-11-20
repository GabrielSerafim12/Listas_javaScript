let A7 = [], B7 = [], prod7 = [[0,0],[0,0]];
for (let i = 0; i < 2; i++) {
A7[i] = []; B7[i] = [];
for (let j = 0; j < 2; j++) {
A7[i][j] = Number(prompt(`A[${i}][${j}]`));
B7[i][j] = Number(prompt(`B[${i}][${j}]`));
}
}
for (let i = 0; i < 2; i++) {
for (let j = 0; j < 2; j++) {
prod7[i][j] = A7[i][0] * B7[0][j] + A7[i][1] * B7[1][j];
}
}
console.log("Produto 2x2:", prod7);