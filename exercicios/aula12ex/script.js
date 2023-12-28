var horario = window.document.getElementById('horario')
var horas = new Date().getHours()
var min = new Date().getMinutes()
var sec = new Date().getSeconds()
horario.innerHTML = `Horario atual ${horas}:${min}:${sec}`

var imagem = window.document.getElementById('imagem')
var fundo = window.document.querySelector('body')
if (horas >= 5 && horas < 12) {
    imagem.innerHTML = `<img src="imagens/manha.jpg" alt="imagem amanhecer">`
} else if (horas >= 12 && horas < 19) {
    imagem.innerHTML = `<img src="imagens/tarde.jpg" alt="imagem tarde">`
    fundo.style.backgroundColor = 'rgb(248, 199, 107)'
} else {
    imagem.innerHTML = `<img src="imagens/noite.jpg" alt="imagem anoitecer">`
    fundo.style.backgroundColor = 'rgb(66, 57, 57)'
}