function checar() {
    var dataAtual = new Date();
    var ano_atual = dataAtual.getFullYear();
    var ano = window.document.getElementById('ano');
    var mes = window.document.getElementById('mes');
    var dia = window.document.getElementById('dia');
    var sexo = window.document.getElementsByName('sexo');
    var foto = window.document.getElementById('foto');
    var dataNascimento = new Date(Number(ano.value), Number(mes.value) - 1, Number(dia.value));
    var diasVividos = Math.floor((dataAtual - dataNascimento) / (1000 * 60 * 60 * 24));
    var semanasVividas = Math.floor((dataAtual - dataNascimento) / (1000 * 60 * 60 * 24 * 7));
    var mesesVividos = (dataAtual.getFullYear() - dataNascimento.getFullYear()) * 12 + (dataAtual.getMonth() - dataNascimento.getMonth());

    if (ano.value === '' || mes.value === '' || dia.value === '' || Number(ano.value) > ano_atual || Number(mes.value) < 1 || Number(mes.value) > 12 || Number(dia.value) < 1 || Number(dia.value > 31)) {
        window.alert('[ERRO] Verifique os dados e tente novamente.');
    } else {
        var anos = ano_atual - Number(ano.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'imagem');
        if (sexo[0].checked) {
            genero = 'homem';
            document.body.style.backgroundColor = 'rgb(112, 112, 241)';
            if (anos <= 11) {
                img.setAttribute('src', 'imagens/homem/bebe.png');
            } else if (anos > 11 && anos <= 20) {
                img.setAttribute('src', 'imagens/homem/jovem.png');
            } else if (anos > 20 && anos <= 65) {
                img.setAttribute('src', 'imagens/homem/adulto.png');
            } else {
                img.setAttribute('src', 'imagens/homem/idoso.png');
            }
        } else {
            genero = 'mulher';
            document.body.style.backgroundColor = 'rgb(247, 175, 241)';
            if (anos <= 11) {
                img.setAttribute('src', 'imagens/mulher/bebe.png');
            } else if (anos > 11 && anos <= 20) {
                img.setAttribute('src', 'imagens/mulher/jovem.png');
            } else if (anos > 20 && anos <= 65) {
                img.setAttribute('src', 'imagens/mulher/adulta.png');
            } else {
                img.setAttribute('src', 'imagens/mulher/idosa.png');
            }
        }
        foto.innerHTML = `Detectamos um(a) ${genero} com <strong>${anos} anos</strong> de idade.<br><br>`;
        foto.innerHTML += `Essa pessoa já viveu:<br>`;
        foto.innerHTML += `<strong>${mesesVividos}</strong> meses<br><strong>${semanasVividas}</strong> semanas<br><strong>${diasVividos}</strong> dias<br><br>`;
        foto.appendChild(img);
    }
}
