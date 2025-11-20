let maiores11 = 0;
for (let i = 1; i <= 10; i++) {
    let idade = Number(prompt(`Digite a idade ${i}:`));
    if (idade >= 18) maiores11++;
}
console.log("Quantidade de maiores de idade:", maiores11);