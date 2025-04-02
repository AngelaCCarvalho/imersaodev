//Saudação
alert("Bem vindo, ao meu segundo projeto do Imersão Dev - Alura")
alert("Clique no botão para iniciar!")

let podeJogar = false; 

//adquire o botão pelo ID
const botaoIniciar = document.getElementById("iniciarJogo")

botaoIniciar.addEventListener("click", jogar)

//Fucionalidae do botão
function jogar(){
  if(!podeJogar){ 
//Escolha da Idade pelo usuário
   idade = prompt("Qual a sua idade?");
//verificação se é Maior ou menor que 18
  if(idade>=18){
  alert("Você pode prosseguir e jogar Jokenpô");
  podeJogar = true;
    jogar(); // Inicia o jogo ao apertar o botão
 }else{
  alert("Você não pode processeguir!")
   return;..
 }
  }

  //Escolha do Usuário
 let escolhaJogador = prompt("Faça sua escolha: [1] Pedra, [2] Papel ou [3] Tesoura?")
 let escolhaJogador1 = parseInt(escolhaJogador)
 let escolhaComputador = Math.floor(Math.random() * 3) + 1;


   //Exebição da escolha pelo jogar e computador
  alert("Escolha Jogador:  " + escolhaJogador + "  " + " - Escolha do Computador:  " + escolhaComputador)  

  //Verificação se o usuário digitou número errado
  if(escolhaJogador1 > 3 || escolhaJogador1 <1 || isNaN(escolhaJogador)){
    alert("Valor Inválido! Tente Novamente!");
   return;
  }
   
  //Fucionalidade do jogo
   if(escolhaJogador1 == escolhaComputador){
     alert("Empate!");
     }else if(escolhaJogador1 === 1 && escolhaComputador === 3){
      alert("Jogador Venceu!");// Pedra Ganha de Tesoura
     } else if(escolhaJogador1 === 2 && escolhaComputador === 1){
      alert("Jogador Venceu!");// Papel ganha de Pedra
     } else if(escolhaJogador1 === 3 && escolhaComputador === 2){
      alert("Jogador Venceu");// Tesoura ganha de Papel
     }  
   else{
      alert("Computador Venceu!");
    }
  }
