let soma9 = 0, count9 = 1;
do {
    let nome = prompt(`Nome da pessoa ${count9}:`);
    let idade = Number(prompt("Idade:"));
    soma9 += idade;
    count9++;
} while (count9 <= 5);
console.log("Média das idades:", soma9 / 5);