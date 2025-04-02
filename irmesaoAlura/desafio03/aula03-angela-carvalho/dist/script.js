
document.addEventListener('DOMContentLoaded',function(){
    
alert("Bem vindo ao meu terceiro projeto da Imersão Dev - Alura")
});

let escolhaComputador = Math.floor(Math.random()*6) + 1;

function jogar1(){
    botao(1)
}
function jogar2(){
    botao(2)    
}
function jogar3(){
    botao(3) 
}
function jogar4(){
    botao(4) 
}
function jogar5(){
    botao(5)
}
function jogar6(){
    botao(6)
}

 function botao(palpite){
    if(palpite ==escolhaComputador){
        alert('Parabéns você venceu!')
    }else{
        alert("Que pena, você errou! O número era: " + escolhaComputador)
    }
 }