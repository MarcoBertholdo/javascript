function checar() {
    var data = new Date()
    var idade = data.getFullYear()
    var ano = window.document.getElementById('ano')
    var sexo = window.document.getElementsByName('sexo')
    var img = window.document.getElementById('imagem')
    var msg = window.document.getElementById('msg')
    if (ano.value.lenght == 0 || Number(ano.value) > idade) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
     img.style.display = 'block'
     msg.style.display = 'none'
     var anos = idade - Number(ano.value)
     if (sexo[0].checked) {
        msg.style.display = 'block'
        msg.innerHTML = `Detectamos um homem com <strong>${anos} anos</strong> de idade.`
        document.body.style.backgroundColor = 'rgb(112, 112, 241)'
        if (anos <= 11) {
            img.src = 'imagens/homem/bebe.png'
        } else if (anos > 11 && anos <= 20) {
            img.src = 'imagens/homem/jovem.png'
        } else if (anos > 20 && anos <= 65) {
            img.src = 'imagens/homem/adulto.png'
        } else {
            img.src = 'imagens/homem/idoso.png'
        }
     } else {
        msg.style.display = 'block'
        msg.innerHTML = `Detectamos uma mulher com <strong>${anos} anos</strong> de idade.`
        document.body.style.backgroundColor = 'rgb(247, 175, 241)'
        if (anos <= 11) {
            img.src = 'imagens/mulher/bebe.png'
        } else if (anos > 11 && anos <= 20) {
            img.src = 'imagens/mulher/jovem.png'
        } else if (anos > 20 && anos <= 65) {
            img.src = 'imagens/mulher/adulta.png'
        } else {
            img.src = 'imagens/mulher/idosa.png'
        }
     }
    }
}