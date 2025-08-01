function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let numerosSorteados = []
    for (i = 1; i <= quantidade; i++) {
        let numero = gerarNumeroAleatorio(de, ate);

        while(numerosSorteados.includes(numero)) {
             numero = gerarNumeroAleatorio(de, ate);
        }

        numerosSorteados.push(numero)
    }
    gerarTextoNaTela(numerosSorteados)
}


function gerarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarTextoNaTela(aleatorio) {
    let texto = document.getElementById('resultado')
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${aleatorio}</label>`
}
