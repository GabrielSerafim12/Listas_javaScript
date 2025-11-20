let somaP = 0, somaI = 0, contP = 0, contI = 0;
for (let i = 1; i <= 5; i++) {
let n = Number(prompt(`Número ${i}:`));
if (n % 2 === 0) { somaP += n; contP++; }
else { somaI += n; contI++; }
}
console.log("Média pares:", somaP / contP);
console.log("Média ímpares:", somaI / contI);