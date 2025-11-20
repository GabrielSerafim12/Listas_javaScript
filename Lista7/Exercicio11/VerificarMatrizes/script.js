let A11 = [], B11 = [];
let iguais11 = true;
for (let i = 0; i < 2; i++) {
A11[i] = []; B11[i] = [];
for (let j = 0; j < 2; j++) {
A11[i][j] = Number(prompt(`A[${i}][${j}]`));
B11[i][j] = Number(prompt(`B[${i}][${j}]`));
if (A11[i][j] !== B11[i][j]) iguais11 = false;
}
}
console.log("As matrizes são iguais?", iguais11);