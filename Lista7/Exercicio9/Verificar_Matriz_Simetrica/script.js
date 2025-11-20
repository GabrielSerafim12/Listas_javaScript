let matriz9 = [];
let simetrica = true;
for (let i = 0; i < 3; i++) {
matriz9[i] = [];
for (let j = 0; j < 3; j++) {
matriz9[i][j] = Number(prompt(`Valor [${i}][${j}]`));
}
}
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
if (matriz9[i][j] !== matriz9[j][i]) simetrica = false;
}
}
console.log("É simétrica?", simetrica);