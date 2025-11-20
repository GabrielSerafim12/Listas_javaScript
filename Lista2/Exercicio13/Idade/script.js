let idadeApos = Number(prompt("Idade:"));
let sexo = prompt("Sexo (M/F):").toUpperCase();
if ((sexo === "M" && idadeApos >= 65) || (sexo === "F" && idadeApos >= 60)) {
console.log("Pode se aposentar");
} else {
console.log("Não pode se aposentar");
}