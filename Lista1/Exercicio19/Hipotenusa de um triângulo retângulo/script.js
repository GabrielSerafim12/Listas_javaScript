let base = parseFloat(prompt("Digite a base do triângulo:"));
let altura = parseFloat(prompt("Digite a altura do triângulo:"));

let hipotenusa = Math.sqrt(Math.pow(base, 2) + Math.pow(altura, 2));
alert("A hipotenusa é: " + hipotenusa.toFixed(2));
