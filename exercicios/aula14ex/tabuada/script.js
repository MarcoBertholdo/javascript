function tabuada() {
    let tab = document.getElementById('numero')
    let quant = document.getElementById('quantidade')
    let res = document.getElementById('resultado')

    if (tab.value.length == 0 || quant.value.length == 0) {
        window.alert('[ERRO]Preencha todos os campos.')
    } else if (Number(quant.value) < 1) {
        window.alert('Quantidade de tabuadas inválida, o valor minimo é 1.')
    } else {
        res.innerHTML = `Tabuada do <strong>${Number(tab.value)}</strong>:<br>`
        for (let cont = 1;cont <= Number(quant.value);cont++)
        res.innerHTML += `${Number(tab.value)} x ${cont} = <strong>${Number(tab.value)*cont}</strong><br>`
    }
    res.style.border = '2px dashed grey'
}

function limpar() {
    let res = document.getElementById('resultado')
    if (res.length != 0) {
        res.innerHTML = ``
        res.style.border = 'none'
    }
}