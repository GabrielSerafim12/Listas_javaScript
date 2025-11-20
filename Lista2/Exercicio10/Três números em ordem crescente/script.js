let a = parseInt(prompt("Digite o primeiro número:"));
let b = parseInt(prompt("Digite o segundo número:"));
let c = parseInt(prompt("Digite o terceiro número:"));

let numeros = [a, b, c];
numeros.sort((x, y) => x - y);

alert("Os números em ordem crescente são: " + numeros.join(", "));
