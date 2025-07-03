function sortear(){//Cria a função sortear que será chamada no HTML quando o botão (sortear) for clicado
    let quantidade = parseInt(document.getElementById("quantidade").value);//precisa ter o .value para pegar o valor do input
    let de = parseInt(document.getElementById("de").value);//O parseInt é necessário para converter o valor do input de string para número
    let ate = parseInt(document.getElementById("ate").value);

    if(de >= ate){//Verifica se o valor de "de" é maior ou igual ao valor de "ate"
        alert("O valor 'Do número' deve ser menor que 'Até o número'. Por favor, corrija os valores e tente novamente."); //Se for, exibe um alerta para o usuário
        return; //E encerra a função para evitar erros 
    }

    let sorteados = [];//Cria um array vazio para armazenar os números sorteados

    let quantidadeMaxima = ate - de + 1;//Calcula a quantidade máxima de números que podem ser sorteados, considerando o intervalo entre "de" e "ate"
    if(quantidade > quantidadeMaxima){//Verifica se a quantidade de números a serem sorteados é maior que a quantidade máxima possível
        alert(`A quantidade de números a serem sorteados não pode ser maior que ${quantidadeMaxima}. Por favor, corrija a quantidade e tente novamente.`);//Se for, exibe um alerta para o usuário informando o erro
        return; //E encerra a função para evitar erros
    }

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
    if(botaoReiniciar.classList.contains("container__botao-desabilitado")) {// Verifica se o botão já está desabilitado
        botaoReiniciar.classList.remove("container__botao-desabilitado");// Se estiver, remove a classe que desabilita o botão
        botaoReiniciar.classList.add("container__botao");// E adiciona a classe que habilita o botão
    }else{
        botaoReiniciar.classList.remove("container__botao");// Se não estiver, remove a classe que habilita o botão
        botaoReiniciar.classList.add("container__botao-desabilitado");// E adiciona a classe que desabilita o botão
    }
}

function reiniciar() {
    let resultado = document.getElementById("resultado");//Pega o elemento com o id resultado do HTML
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: </label>`;//Define o conteúdo HTML do elemento resultado como uma string vazia

    document.getElementById("quantidade").value = "";//Limpa o valor do input quantidade
    document.getElementById("de").value = "";//Limpa o valor do input
    document.getElementById("ate").value = "";//Limpa o valor do input ate
    document.getElementById("quantidade").focus();//Foca no input quantidade para que o usuário possa digitar novamente sem precisar clicar nele
    document.getElementById("resultado").innerHTML = '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';//Define o conteúdo HTML do elemento resultado como uma string vazia
    
    alterarStatusBotao();//Chama a função alterarStatusBotao para habilitar o botão Sortear após o reinício
}   
