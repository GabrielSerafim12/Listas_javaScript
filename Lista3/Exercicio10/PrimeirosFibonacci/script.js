// 10) Primeiros 20 Fibonacci
let x = 0;
let y = 1;
let cont = 1;
while (cont <= 20) {
console.log(x);
let temp = x + y;
x = y;
y = temp;
cont++;
}