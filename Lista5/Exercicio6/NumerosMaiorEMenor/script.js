let maior6 = -Infinity;
let menor6 = Infinity;

for (let i = 1; i <= 10; i++) {
    let n = Number(prompt(`Digite o ${i}º número:`));
    if (n > maior6) maior6 = n;
    if (n < menor6) menor6 = n;
}
console.log("Maior:", maior6, "Menor:", menor6);