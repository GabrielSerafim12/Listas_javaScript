let matriz13 = [];
for (let i = 0; i < 4; i++) {
matriz13[i] = [];
let maior = -Infinity;
for (let j = 0; j < 4; j++) {
matriz13[i][j] = Number(prompt(`Valor [${i}][${j}]`));
if (matriz13[i][j] > maior) maior = matriz13[i][j];
}
console.log(`Maior valor da linha ${i}:`, maior);
}