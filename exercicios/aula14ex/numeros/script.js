function contar() {
    var ini = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var pas = window.document.getElementById('passo')
    var resultado = window.document.getElementById('resultado')

    if (ini.value === '' || fim.value === '') {
        window.alert('Insira um valor de INICIO e FIM.')
    } else if (pas.value < 1 || Number(fim.value) < Number(pas.value)) {
        pas.value = 1
        window.alert('Passo inválido! O passo foi alterado automaticamente para 1.')
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