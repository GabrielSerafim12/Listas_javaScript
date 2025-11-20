let sp11 = 0, sn11 = 0;
for (let i = 1; i <= 10; i++) {
let n = Number(prompt(`Número ${i}:`));
if (n > 0) sp11 += n;
else if (n < 0) sn11 += n;
}
console.log("Soma positivos:", sp11);
console.log("Soma negativos:", sn11);