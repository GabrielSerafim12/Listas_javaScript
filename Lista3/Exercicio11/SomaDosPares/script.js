// 11) Soma dos pares até N
let limitePar = Number(prompt("Número:"));
let k = 1;
let somaPar = 0;
while (k <= limitePar) {
if (k % 2 === 0) somaPar += k;
k++;
}
console.log("Soma dos pares: " + somaPar);