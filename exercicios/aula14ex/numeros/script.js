function contar() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')


    for (var cont = ini.value;cont < fim.value;cont += pas.value) {
        resultado.innerHTML += `${cont}`
    }
}