const botaoMostraPalavras = document.querySelector('#botao-palavrachave');

botaoMostraPalavras.addEventListener('click', mostraPalavraChave);

function mostraPalavraChave() {
    //alert("Fui clicado!");
    const texto = document.querySelector('#entrada-de-texto').value;
    const campoResultado = document.querySelector('#resultado-palavrachave');
    const palavras = processaTesto(testo)

    campoResultado.textContent = palavras.join(", ");
}

function processaTesto(testo) {
    //let palavras = testo.split(/\s+/);  "retirar espaços"
    //let palavras = testo.split(/[a-zA-Z]+/); "letras minusculas e maiusculas"
    let palavras = testo.split("/\P{L}+/u/");  /* \P negação; {L} conjunto de letras; + uma ou mais ocorrencias; u Unidade 

    let frequencias = []

    for (let i in palavras) {
    frequencia[i] = 0;
    
    }

    console.log(frequencia);

    return palavras;
}