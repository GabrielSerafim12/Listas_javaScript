 let idadeVoto = Number(prompt("Idade:"));
if (idadeVoto >= 18 && idadeVoto <= 70) console.log("Voto obrigatório");
else if ((idadeVoto >= 16 && idadeVoto < 18) || idadeVoto > 70) console.log("Voto facultativo");
else console.log("Não pode votar");