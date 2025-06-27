const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const texto = Document.querySelector('#entrada-de-texto').value;
    const campoResultado = Document.querySelector('resultado-palavrachave')
    const palavras = texto.split('')

    campoResultado.textContent = palavras.join(", ")
}