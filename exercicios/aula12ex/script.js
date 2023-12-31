function carregar() {
    var horario = window.document.getElementById('horario')
    var horas = new Date().getHours()
    var min = new Date().getMinutes()
    var sec = new Date().getSeconds()

    var imagem = window.document.getElementById('img')
    if (horas >= 5 && horas < 12) {
        imagem.src = 'imagens/manha.jpg'
        document.body.style.backgroundColor = '#818996'
    } else if (horas >= 12 && horas < 19) {
        imagem.src = 'imagens/tarde.jpg'
        document.body.style.backgroundColor = '#f1d280'
    } else {
        imagem.src = 'imagens/noite.jpg'
        document.body.style.backgroundColor = '#3c3c3a'
    }
    horario.innerHTML = `Horario atual ${horas}:${min}:${sec}`
}