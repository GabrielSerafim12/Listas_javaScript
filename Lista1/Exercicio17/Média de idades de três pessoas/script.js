let idade1 = parseInt(prompt("Digite a idade da primeira pessoa:"));
let idade2 = parseInt(prompt("Digite a idade da segunda pessoa:"));
let idade3 = parseInt(prompt("Digite a idade da terceira pessoa:"));

let mediaIdades = (idade1 + idade2 + idade3) / 3;
alert("A média das idades é: " + mediaIdades.toFixed(1));
