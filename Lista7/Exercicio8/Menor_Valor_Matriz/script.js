let matriz8 = [];
let menor8 = Infinity;
for (let i = 0; i < 3; i++) {
matriz8[i] = [];
for (let j = 0; j < 3; j++) {
matriz8[i][j] = Number(prompt(`Valor [${i}][${j}]`));
if (matriz8[i][j] < menor8) menor8 = matriz8[i][j];
}
}
console.log("Menor elemento:", menor8);