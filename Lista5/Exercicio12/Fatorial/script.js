let n12 = Number(prompt("Digite um número para calcular o fatorial:"));
let fat = 1;
for (let i = n12; i >= 1; i--) fat *= i;
console.log(`Fatorial de ${n12} = ${fat}`);