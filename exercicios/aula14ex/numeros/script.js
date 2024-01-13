function contar() {
    let ini = window.document.getElementById('inicio')
    let fim = window.document.getElementById('fim')
    let pas = window.document.getElementById('passo')
    let resultado = window.document.getElementById('resultado')

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        window.alert('Insira um valor de INICIO e FIM e PASSO.')
    } else if (Number(pas.value < 1)) {
        pas.value = 1
        window.alert('Passo inválido! O passo foi alterado automaticamente para 1.')
    } else {
            resultado.innerHTML = 'Contando: <br>'
            if (Number(ini.value) < Number(fim.value)) {  // CONTAGEM CRESCENTE
                for (let cont = Number(ini.value);cont <= Number(fim.value);cont += Number(pas.value)) {
                    resultado.innerHTML += `${cont} \u{1F449} `
                }
            } else {  // CONTAGEM REGRESSIVA
                for (let cont = Number(ini.value);cont >= Number(fim.value);cont -= Number(pas.value)) {
                    resultado.innerHTML += `${cont} \u{1F449} `
                }
            }
            resultado.innerHTML += `<strong>FIM</strong> \u{1F3C1}`
        }
    }

function limpar() {
    let resultado = window.document.getElementById('resultado')
    if (resultado.length != 0) {
        resultado.innerHTML = `Preparando contagem...`
    }
}