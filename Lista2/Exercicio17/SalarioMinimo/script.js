let salarioMinimo = Number(prompt("Salário mínimo:"));
let salarioFuncionario = Number(prompt("Salário do funcionário:"));
let qtdSalarios = salarioFuncionario / salarioMinimo;
console.log("Recebe " + qtdSalarios.toFixed(2) + " salários mínimos");