let soma15 = 0, count15 = 0;
do {
    let nome15 = prompt("Digite um nome (ou 'fim' para encerrar):");

    if (nome15.toLowerCase() === "fim") break;

    let idade15 = Number(prompt("Digite a idade:"));
    soma15 += idade15;
    count15++;
} while (true);

console.log("Média das idades:", soma15 / count15);