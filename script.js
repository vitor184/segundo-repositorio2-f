const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = processaTexto(texto);

    campoResultado.textContent = palavras.join(", ");
}

function processaTexto(texto) {
    //let palavras = texto.split(/\s+/);  "retirar espaços"
    //let palavras = texto.split(/[^a-zA-Z]+/); "letras minusculas e maiusculas"
    let palavras = texto.split("/\P{L}+/u/");  /* \P negação;  {L} conjunto de letras; + uma ou mais ocorrências; u Unicode*/

    const frequencias = contaFrequencias(palavras);

    let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];
    }
    return ordenadas.slice(0,10);
}

function contaFrequencias(palavras) {
    let frequencias = {};
    for ( let i of palavras) {
        frequencias[i] = 0;
        for ( let j of palavras) {
            if( i == j ) {
                frequencias[i]++;
            }
        }
    }
    return palavras;
}
