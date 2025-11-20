let idadePessoa = parseInt(prompt("Digite a idade da pessoa:"));

if (idadePessoa <= 12) {
  alert("Criança");
} else if (idadePessoa <= 17) {
  alert("Adolescente");
} else if (idadePessoa <= 59) {
  alert("Adulto");
} else {
  alert("Idoso");
}
