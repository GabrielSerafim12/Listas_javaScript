let matriz5 = [];
let maior5 = -Infinity;
for (let i = 0; i < 3; i++) {
matriz5[i] = [];
for (let j = 0; j < 3; j++) {
matriz5[i][j] = Number(prompt(`Valor [${i}][${j}]`));
if (matriz5[i][j] > maior5) maior5 = matriz5[i][j];
}
}
console.log("Maior elemento:", maior5);