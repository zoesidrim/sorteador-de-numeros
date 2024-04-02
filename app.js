function sortear(){
    let quantidadeNumero= parseInt(document.getElementById('quantidade').value);
    let doNumero = parseInt(document.getElementById('de').value);
    let ateNumero = parseInt(document.getElementById('ate').value);

    if (doNumero >= ateNumero){
        alert('Campo "Do Número" deve ser inferior ao campo "Até Número". Verifique!');
        limparCampos();
        return;
    }
    
    if (quantidadeNumero > (ateNumero - doNumero +1)){
        alert ('Campo "Quantidade" deve ser menor ou igual ao intervalo informado no campo "Do número" até o campo "Até o número". Verifique!');
        limparCampos();
        return;    
        }

    
    
    
    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidadeNumero; i++){
        numero = gerarNumeroAleatorio(doNumero, ateNumero); 
        
        while (sorteados.includes(numero)){
            numero = gerarNumeroAleatorio(doNumero, ateNumero);     
        }
       
        sorteados.push(numero);
    
    }

let resultadoSorteados = document.getElementById('resultado');
resultadoSorteados.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;  

alterarStatusBotaoReiniciar();
}


function gerarNumeroAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);

}

function alterarStatusBotaoReiniciar(){
let botaoReiniciar = document.getElementById('btn-reiniciar');
    if (botaoReiniciar.classList.contains('container__botao-desabilitado')){
        botaoReiniciar.classList.remove('container__botao-desabilitado');
        botaoReiniciar.classList.add('container__botao');
    } else {
        botaoReiniciar.classList.remove('container__botao');
        botaoReiniciar.classList.add('container__botao-desabilitado');

    }

}

function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    alterarStatusBotaoReiniciar(); 
}

function limparCampos(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
}