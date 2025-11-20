let soma7 = 0;
for (let i = 1; i <= 5; i++) {
    soma7 += Number(prompt(`Digite o ${i}º número:`));
}
console.log("Média:", soma7 / 5);