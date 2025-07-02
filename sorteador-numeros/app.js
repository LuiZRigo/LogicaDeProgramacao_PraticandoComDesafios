function sortear(){//Cria a função sortear que será chamada no HTML quando o botão (sortear) for clicado
    let quantidade = parseInt(document.getElementById("quantidade").value);//precisa ter o .value para pegar o valor do input
    let de = parseInt(document.getElementById("de").value);//O parseInt é necessário para converter o valor do input de string para número
    let ate = parseInt(document.getElementById("ate").value);
    
    let sorteados = [];//Cria um array vazio para armazenar os números sorteados

    for (let i = 0; i < quantidade; i++) {//Cria um loop que irá rodar a quantidade de vezes que o usuário escolheu
        let numero = obterNumeroAleatorio(de, ate);//Chama a função obterNumeroAleatorio passando os valores de de e ate
        
        while (sorteados.includes(numero)) {//Verifica se o número já foi sorteado
            numero = obterNumeroAleatorio(de, ate);//Se o número já foi sorteado, gera um novo número aleatório
        }

        //Aqui gerou pela IA 
        // if( sorteados.includes(numero) ) {//Verifica se o número já foi sorteado
        //     i--; //Se o número já foi sorteado, diminui o contador i para que o loop continue até sortear a quantidade desejada de números únicos
        //     continue; //Continua para a próxima iteração do loop
        // }
        sorteados.push(numero);//Adiciona o número sorteado no array sorteados o push que adiciona um elemento ao final do array
    }

    let resultado = document.getElementById("resultado");//Pega o elemento com o id resultado do HTML
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados:  ${sorteados}</label>`;//Define o conteúdo HTML do elemento resultado como uma string vazia

    alterarStatusBotao();//Chama a função alterarStatusBotao para desabilitar o botão Reiniciar após o sorteio
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // Gera um número aleatório entre min e max   

}

function alterarStatusBotao() {
    let botaoReiniciar = document.getElementById("btn-reiniciar");// Pega o botão Reiniciar pelo ID
    if(botaoReiniciar.disabled) {// Verifica se o botão já está desabilitado
        botaoReiniciar.disabled = false; // Se estiver desabilitado, habilita o botão
    }
}
