let num = [2, 4, 7]
num[3] = 5 // adiciona o numero 5 na pos 3
num.push(8) // adiciona o numero 8 no final da array

console.log(num)
console.log(num.length) // quantidade de casas
console.log(num.sort()) // coloca a array em ordem crescente
console.log(num.reverse()) // coloca a array de trás pra frente
let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(pos)
}
