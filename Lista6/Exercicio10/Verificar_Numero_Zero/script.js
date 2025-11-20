let temZero = false;
for (let i = 1; i <= 5; i++) if (Number(prompt(`Número ${i}:`)) === 0) temZero = true;
console.log("Existe zero?", temZero);