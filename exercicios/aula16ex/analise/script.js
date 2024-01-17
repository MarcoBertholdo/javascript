function adicionar() {
    let num = document.getElementById('numero')
    let res = document.getElementById('resultado')
    let tab = document.getElementById('tab')
    let numbers = [3, 5, 8, 10]
    if(num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100) {
        window.alert('Valor inválido, insira um valor correto.')
    } else if(numbers.indexOf(Number(num.value)) == -1) {
        res.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        if(numbers.length == 0) {
            numbers[0] = Number(num.value)  
        } else {
            numbers[numbers.length] = Number(num.value)
            res.innerHTML = `teste ${numbers}`
            res.innerHTML += `<br>${numbers.indexOf(Number(num.value))}`
        }
    } else {
        window.alert(`O valor ${num.value} já foi adicionado.`)
    }
}


function finalizar() {

}