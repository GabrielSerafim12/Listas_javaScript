let intervalo13 = 0;
for (let i = 1; i <= 10; i++) {
let n = Number(prompt(`Número ${i}:`));
if (n >= 10 && n <= 50) intervalo13++;
}
console.log("No intervalo 10 a 50:", intervalo13);