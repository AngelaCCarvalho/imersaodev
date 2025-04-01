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
   return;
 }
  }

  //Escolha do Usuário
 let escolhaJogador = prompt("Faça sua escolha: [1] Pedra, [2] Papel ou [3] Tesoura?")
 let escolhaComputador = Math.floor(Math.random() * 3) + 1;

 //Verificação se o usuário digitou número errado
  if(escolhaJogador > 3 || escolhaJogador <1 || isNaN(escolhaJogador)){
     alert("Valor Inválido! Tente Novamente!");
    return;
   }

   //Exebição da escolha pelo jogar e computador
  alert("Escolha Jogador:  " + escolhaJogador + "  " + " - Escolha do Computador:  " + escolhaComputador)  
   
  //Fucionalidade do jogo
   if(escolhaJogador == escolhaComputador){
     alert("Empate!")
   }
  if(
     (escolhaJogador === 1 && escolhaComputador === 3)|| // Pedra Ganha de Tesoura
     (escolhaJogador === 2 && escolhaComputador === 1)|| // Papel ganha de Pedra
     (escolhaJogador === 3 && escolhaComputador === 2)  // Tesoura ganha de Papel
   ){
     alert("Jogador Venceu!")     
    }else{
      alert("Computador Venceu!")
    }
  }
