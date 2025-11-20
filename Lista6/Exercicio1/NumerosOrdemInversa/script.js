let nums1 = [];
for (let i = 1; i <= 5; i++) {
nums1.push(Number(prompt(`Digite o ${i}º número:`)));
}
console.log("Ordem inversa:", nums1.reverse());