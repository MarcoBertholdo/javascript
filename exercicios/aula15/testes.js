let num = [2, 4, 7]
num[3] = 5
num.push(8)

for(let pos in num) {
    console.log(`Número ${num[pos]} na posição ${pos}`)
}

/*
for (let pos = 0; pos < num.length; pos++) {
    console.log(`Número ${num[pos]} na posição ${pos}`)
}*/


/*let pos = 0
while (pos <= num.length - 1) {
    console.log(`Número ${num[pos]} na posição ${pos}`)
    pos++
}*/