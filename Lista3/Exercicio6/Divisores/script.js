// 6) Divisores
let nDiv = Number(prompt("Número:"));
let d = 1;
while (d <= nDiv) {
if (nDiv % d === 0) console.log(d);
d++;
}