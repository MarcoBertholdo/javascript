function contar() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')

    if (ini.value === '') {
        window.alert('Insira um valor')
    } else {
        if (resultado.lenght != 0) {
            resultado.innerHTML = ``
        }
        for (var cont = Number(ini.value);cont <= Number(fim.value);cont += Number(pas.value)) {
            resultado.innerHTML += `${cont} 👉 `
        }
        resultado.innerHTML += `<strong>FIM</strong> 🏁`
    }
}

function limpar() {
    var resultado = window.document.getElementById('resultado')
    if (resultado.lenght != 0) {
        resultado.innerHTML = `Preparando contagem...`
    }
}