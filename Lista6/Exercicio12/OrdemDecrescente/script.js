let nums12 = [];
for (let i = 1; i <= 5; i++) nums12.push(Number(prompt(`Número ${i}:`)));
console.log(nums12.sort((a,b) => b - a));