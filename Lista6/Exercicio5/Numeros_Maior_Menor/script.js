let maior5 = -Infinity;
let menor5 = Infinity;
for (let i = 1; i <= 5; i++) {
let n = Number(prompt(`Número ${i}:`));
if (n > maior5) maior5 = n;
if (n < menor5) menor5 = n;
}
console.log("Maior:", maior5, "Menor:", menor5);