function tabuada() {
    let tab = document.getElementById('numero')
    let res = document.getElementById('seltab')

    if (tab.value.length == 0) {
        window.alert('[ERRO] Preencha todos os campos.')
    } else {
        let n = Number(tab.value)
        let cont = 1
        res.innerHTML = ''
        while (cont <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${cont} = ${n*cont}`
            item.value = `tab${cont}`
            res.appendChild(item)
            cont++
        }
    }

}