// Função principal que realiza o sorteio dos números
function sortear() {
    // Obtém os valores dos campos de entrada
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    // Validação dos dados de entrada
    if (de >= ate) {
        alert(`Reveja se inseriu os dados corretamente: o valor do campo "Do número" não pode ser maior ou igual ao valor do campo "Até o número".`)
        limparCampo() // Limpa os campos se houver erro
        return // Interrompe a execução da função
    } else if (quantidade > (ate - de)) {
        alert(`A quantidade de números a serem sorteados não pode ser maior que o intervalo entre "Do número" e "Até o número".`)
        limparCampo() // Limpa os campos se houver erro
        return // Interrompe a execução da função
    }

    // Cria uma lista para armazenar os números sorteados
    let listaNumeros = []
    // Sorteia os números, garantindo que não haja repetidos
    for (let i = 1; i <= quantidade; i++) {
        numero = sortearNumeros(de, ate)

        // Repete o sorteio se o número já estiver na lista
        while (listaNumeros.includes(numero)) {
            numero = sortearNumeros(de, ate)
        }
        // Adiciona o número sorteado à lista
        listaNumeros.push(numero)
    }

    // Exibe os números sorteados na tela
    textoNaTela(listaNumeros)
    // Habilita o botão de reiniciar
    alterarStatusBotao()
}

// Função que alterna o status do botão de reiniciar
function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar')

    // Se o botão estiver desabilitado, habilita
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado')
        botao.classList.add('container__botao')
    } else {
        // Se estiver habilitado, desabilita
        botao.classList.remove('container__botao')
        botao.classList.add('container__botao-desabilitado')
    }

    // Versão com replace que funciona, mas não coloca o botão em default ao resetar a aplicação
    // botao.classList.replace('container__botao-desabilitado','container__botao')
}

// Função que sorteia um número aleatório entre min e max (inclusive)
function sortearNumeros(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Função que exibe os números sorteados na tela
function textoNaTela(naTela) {
    let texto = document.getElementById('resultado')
    texto.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${naTela}</label>`
}

// Função que limpa os campos de entrada
function limparCampo() {
    document.getElementById('quantidade').value = ''
    document.getElementById('de').value = ''
    document.getElementById('ate').value = ''
}

// Função que reinicia a aplicação
function reiniciar() {
    limparCampo()
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>'
    alterarStatusBotao()
}