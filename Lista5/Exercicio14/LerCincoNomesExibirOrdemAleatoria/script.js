let nomes = [];
for (let i = 1; i <= 5; i++) {
    nomes.push(prompt(`Digite o nome ${i}:`));
}
console.log("Nomes invertidos:");
for (let i = nomes.length - 1; i >= 0; i--) {
    console.log(nomes[i]);
}