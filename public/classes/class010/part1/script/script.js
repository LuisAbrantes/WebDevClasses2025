// Seleciona os elementos no documento
var lampada = document.getElementById('lampada');
var botao = document.getElementById('botaoLampada');

// Função que alterna a classe 'ligada' para acender ou apagar a lâmpada
function alternarLampada() {
    lampada.classList.toggle('ligada');
}

// Associa o clique do botão com a função de alternância
botao.addEventListener('click', alternarLampada);
