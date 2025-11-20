let mes = prompt("Digite o nome do mês:").toLowerCase();

switch (mes) {
  case "janeiro":
  case "março":
  case "maio":
  case "julho":
  case "agosto":
  case "outubro":
  case "dezembro":
    alert("Este mês tem 31 dias.");
    break;
  case "abril":
  case "junho":
  case "setembro":
  case "novembro":
    alert("Este mês tem 30 dias.");
    break;
  case "fevereiro":
    alert("Fevereiro tem 28 dias, ou 29 em ano bissexto.");
    break;
  default:
    alert("Mês inválido!");
}
