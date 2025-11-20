let pos9 = 0, neg9 = 0;
for (let i = 1; i <= 10; i++) {
let n = Number(prompt(`Número ${i}:`));
if (n > 0) pos9++;
else if (n < 0) neg9++;
}
console.log("Positivos:", pos9, "Negativos:", neg9);