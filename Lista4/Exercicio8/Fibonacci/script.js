let limite8 = Number(prompt("Digite um número para exibir Fibonacci até ele:"));
let a8 = 0, b8 = 1;
console.log(a8);
do {
    console.log(b8);
    let temp = b8;
    b8 = a8 + b8;
    a8 = temp;
} while (b8 <= limite8);