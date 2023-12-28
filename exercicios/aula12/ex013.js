var agora = new Date()
var diaSem = agora.getDay()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
var full = `${hora}:${min}:${sec}`

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break
    default:
        console.log('Sabado')
}
console.log(full)