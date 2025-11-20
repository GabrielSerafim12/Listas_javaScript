let count4 = 1, soma4 = 0;
do {
    let n = Number(prompt(`Digite o ${count4}º número:`));
    soma4 += n;
    count4++;
} while (count4 <= 5);
console.log("Média:", soma4 / 5);