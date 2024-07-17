function comprar(){
    let tipoIngresso = document.getElementById("tipo-ingresso").value;
    let quantidade = document.getElementById("qtd").value;

    //Subtração dos ingressos disponíveis
    let novaQuantidadeIngressos = subtracaoIngressos(tipoIngresso, quantidade)

    //  Evitar compra sem cadeiras
    if(novaQuantidadeIngressos < 0){
        alert(`quantidade indisponível para ${tipoIngresso}`)
        return NaN
    }

    //Altera a quantidade de ingressos
    alteraQuantidadeIngressos(tipoIngresso, novaQuantidadeIngressos)
}

function subtracaoIngressos(tipo, quantidadeComprada){
    let quantidadeIngressos = document.getElementById(`qtd-${tipo}`).textContent;
    return quantidadeIngressos - quantidadeComprada
}

function alteraQuantidadeIngressos(tipo, quantidade){
    const qtdTipo = document.getElementById(`qtd-${tipo}`);
    qtdTipo.innerHTML = `<span id="qtd-${tipo}">${quantidade}</span>`
}