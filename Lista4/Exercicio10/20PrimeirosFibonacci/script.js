let a10 = 0, b10 = 1, count10 = 1;
do {
    console.log(a10);
    let temp = b10;
    b10 = a10 + b10;
    a10 = temp;
    count10++;
} while (count10 <= 20);