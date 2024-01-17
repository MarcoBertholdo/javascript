let num = document.getElementById('numero')
let res = document.getElementById('resultado')
let tab = document.getElementById('tab')
let numbers = []
function adicionar() {

    if(num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100) {
        window.alert('Valor inválido, insira um valor correto.')
    } else if(numbers.indexOf(Number(num.value)) == -1) {
        res.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        numbers.push(Number(num.value))
        res.innerHTML = `teste ${numbers}`
        res.innerHTML += `<br>${numbers.indexOf(Number(num.value))}`
    } else {
        window.alert(`O valor ${num.value} já foi adicionado.`)
    }
}


function finalizar() {

}