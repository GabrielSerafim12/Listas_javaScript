// 15) Média até nome "fim"
let nomeP = prompt("Nome:");
let somaIdFinal = 0;
let qtd = 0;
while (nomeP.toLowerCase() !== "fim") {
let idadeP = Number(prompt("Idade:"));
somaIdFinal += idadeP;
qtd++;
nomeP = prompt("Nome:");
}
console.log("Média final das idades: " + (somaIdFinal / qtd));