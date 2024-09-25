let idIntervalo;

// Função para iniciar o setInterval
document.getElementById('iniciarIntervalo').addEventListener('click', function() {
    let tempo = document.getElementById('intervaloInput').value;
    if (tempo && !isNaN(tempo)) {
        idIntervalo = setInterval(() => {
            document.getElementById('resultado').innerHTML += 'Printando usando setInterval<br>';
        }, parseInt(tempo));
    } else {
        alert("Por favor, digita um valor em milissegundos.");
    }
});
// ao digitar 1000 ou 10000, sera contado de 1 segundo a 10 segundos

// Função para parar o setInterval
document.getElementById('pararIntervalo').addEventListener('click', function() {
    clearInterval(idIntervalo);
    document.getElementById('resultado').innerHTML += 'Intervalo parado<br>';
});

// Função para iniciar o setTimeout
document.getElementById('iniciarTimeout').addEventListener('click', function() {
    let tempo = document.getElementById('intervaloInput').value;
    if (tempo && !isNaN(tempo)) {
        setTimeout(() => {
            document.getElementById('resultado').innerHTML += 'Printando usando setTimeout<br>';
        }, parseInt(tempo));
    } else {
        alert("Por favor, digite um valor em milissegundos.");
    }
});

// Função para limpar o conteúdo
document.getElementById('limparTudo').addEventListener('click', function() {
    document.getElementById('resultado').innerHTML = '';
});