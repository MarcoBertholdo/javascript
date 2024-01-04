function checar() {
    var data = new Date()
    var idade = data.getFullYear()
    var ano = window.document.getElementById('ano')
    var mes = window.document.getElementById('mes')
    var dia = window.document.getElementById('dia')
    var sexo = window.document.getElementsByName('sexo')
    var foto = window.document.getElementById('foto')
    if (ano.value === '' || Number(ano.value) > idade) {
        window.alert('[ERRO] Verifique os dados e tente novamente.')
    } else {
     var anos = idade - Number(ano.value)
     var genero = ''
     var img = document.createElement('img')
     img.setAttribute('id', 'imagem')
     if (sexo[0].checked) {
        genero = 'homem'
        document.body.style.backgroundColor = 'rgb(112, 112, 241)'
        if (anos <= 11) {
            img.setAttribute('src', 'imagens/homem/bebe.png')
        } else if (anos > 11 && anos <= 20) {
            img.setAttribute('src', 'imagens/homem/jovem.png')
        } else if (anos > 20 && anos <= 65) {
            img.setAttribute('src', 'imagens/homem/adulto.png')
        } else {
            img.setAttribute('src', 'imagens/homem/idoso.png')
        }
     } else {
        genero = 'mulher'
        document.body.style.backgroundColor = 'rgb(247, 175, 241)'
        if (anos <= 11) {
            img.setAttribute('src', 'imagens/mulher/bebe.png')
        } else if (anos > 11 && anos <= 20) {
            img.setAttribute('src', 'imagens/mulher/jovem.png')
        } else if (anos > 20 && anos <= 65) {
            img.setAttribute('src', 'imagens/mulher/adulta.png')
        } else {
            img.setAttribute('src', 'imagens/mulher/idosa.png')
        }
     }
        foto.innerHTML = `Detectamos um(a) ${genero} com ${anos} anos de idade.<br>`
        foto.innerHTML += `Essa pessoa nasceu em <strong>${dia.value}/${mes.value}/${ano.value}</strong>`
        foto.appendChild(img)
    }
}