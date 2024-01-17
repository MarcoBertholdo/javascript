let num = document.getElementById('numero')
let res = document.getElementById('resultado')
let tab = document.getElementById('tab')
let numbers = []
let maior = 0
let menor = 101
let soma = 0
let media = 0
function adicionar() {

    if(num.value.length == 0 || Number(num.value) < 1 || Number(num.value) > 100) {
        window.alert('Valor inválido, insira um valor correto.')
    } else if(numbers.indexOf(Number(num.value)) == -1) {
        res.innerHTML = ''
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        tab.appendChild(item)
        numbers.push(Number(num.value))
        soma += Number(num.value)
        if(Number(num.value) > maior) {
            maior = Number(num.value)
        }
        if(Number(Number(num.value) < menor)) {
            menor = Number(num.value)
        }
    } else {
        window.alert(`O valor ${num.value} já foi adicionado.`)
    }
}


function finalizar() {
    if(tab.length == 0) {
        window.alert('Adicione valores antes de finalizar.')
    } else {
        res.innerHTML = `<p>Ao todo, temos <strong>${numbers.length}</strong> números na lista.</p>`
        res.innerHTML += `<p>O maior número é: <strong>${maior}</strong>.</p>`
        res.innerHTML += `<p>O menor número é: <strong>${menor}</strong>.</p>`
        res.innerHTML += `<p>Somando todos os valores temos <strong>${soma}</strong>.</p>`
        res.innerHTML += `<p>A média dos valores é: <strong>${soma / numbers.length}</strong>.</p>`
    }
}