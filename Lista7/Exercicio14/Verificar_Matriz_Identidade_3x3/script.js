function matrizIdentidade(matriz) {
let identidade = true;
for (let i = 0; i < 3; i++) {
for (let j = 0; j < 3; j++) {
if (i === j && matriz[i][j] !== 1) identidade = false;
if (i !== j && matriz[i][j] !== 0) identidade = false;
}
}
console.log(identidade ? "É identidade" : "Não é identidade");
}