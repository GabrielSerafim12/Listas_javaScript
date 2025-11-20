// 8) Fibonacci até o número lido
let limite = Number(prompt("Limite Fibonacci:"));
let a = 0;
let b = 1;
while (a <= limite) {
console.log(a);
let temp = a + b;
a = b;
b = temp;
}