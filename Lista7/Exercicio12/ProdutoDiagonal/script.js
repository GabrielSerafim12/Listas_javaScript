let matriz12 = [];
let prod12 = 1;
for (let i = 0; i < 3; i++) {
matriz12[i] = [];
for (let j = 0; j < 3; j++) {
matriz12[i][j] = Number(prompt(`Valor [${i}][${j}]`));
}
}
for (let i = 0; i < 3; i++) prod12 *= matriz12[i][2 - i];
console.log("Produto diagonal secundária:", prod12);