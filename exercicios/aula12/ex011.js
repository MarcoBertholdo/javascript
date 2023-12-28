var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var sec = agora.getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${sec} horas`)
if (hora >= 5 && hora < 12) {
    console.log('Bom dia')
} else if (hora >= 12 && hora <= 18)
        console.log('Boa tarde')
        else if (hora > 18 && hora <= 24)
        console.log('Boa Noite')
        else {
            console.log('Boa Madrugada')
        }
