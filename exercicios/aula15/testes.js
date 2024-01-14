let num = [2, 4, 7]
num[3] = 5
num.push(8)

let cont = 0
while (cont <= num.length - 1) {
    console.log(`Número ${num[cont]} na posição ${cont}`)
    cont++
}