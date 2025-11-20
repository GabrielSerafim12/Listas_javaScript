// 14) Fatorial
let numFat = Number(prompt("Número:"));
let f = numFat;
let fat = 1;
while (f > 1) {
fat *= f;
f--;
}
console.log("Fatorial: " + fat);