function subtrairMatrizes2x2(a, b) {
const resultado = [];
for (let i = 0; i < 2; i++) {
resultado[i] = [];
for (let j = 0; j < 2; j++) {
resultado[i][j] = a[i][j] - b[i][j];
}
}
console.log(resultado);
}