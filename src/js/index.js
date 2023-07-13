/*
    O que precisamos fazer? - quando clicarmos no botão de troca de tema temos que 
    alterar a cor do tema da pagina para as cores do tema claro ou do tema escuro

     - Objetivo 1 - quando clicar no botão de troca de tema, adicionar a classe
     modo-escuro no body para que os estilos do modo escuro sejam aplicados e mudar a
     imagem para lua*/

/* - Objetivo 2 - Quando clicar no botão de troca de tema, caso o body já tenha a classe modo-escuro, remover a classe para mudar para o modo claro e mudar a imagem para o sol*/

// - passo 1 - pegar no Java Script o elemento HTML correspondente ao botão de troca de tema
const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao");

// - passo 2 - pegar no JS o elemento HTML corresponde ao body
const body = document.querySelector("body");

// - passo 3 - identificar o clique do usuário no botao de troca de tema
botaoAlterarTema.addEventListener("click", () => {

    //- passo 4 - remover a classe do modo-escuro do body*/

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro");
    // - passo 5 - adicionar a classe modo escuro no body(refatorado usando toggle para alternar a classe)
    body.classList.toggle("modo-escuro");

    if (modoEscuroEstaAtivo) {
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")
    }
    else {

        // - passo 6 - trocar a imagem do botão de alterar tema para Lua
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");


    }

});

















/*
 - passo 7 - trocar a imagem do botao alterar tema para sol
*/

