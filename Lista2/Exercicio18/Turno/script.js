let nomeTurno = prompt("Nome:");
let turno = prompt("Turno (M/V):").toUpperCase();
if (turno === "M") console.log("Bom dia, aluno " + nomeTurno);
else if (turno === "V") console.log("Boa tarde, aluno " + nomeTurno);
else console.log("Turno inválido");