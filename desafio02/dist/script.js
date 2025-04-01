
//Escolha da Idade pelo usuário
idade = prompt("Qual a sua idade?"); 
let podeJogar = false; 

//verificação se é Maior ou menor que 18
if(idade>=18){
  alert("Você pode prosseguir e jogar Jokenpô");
  podeJogar = true;
  jogar(); // Executa o jogo imediatamente
 }else{
  alert("Você não pode processeguir!")
 }
 
 if (podeJogar) {
  jogar();
}
//Fucionalidae do botão
function jogar(){
  if(!podeJogar){
    alert("Não pode processeguir, você é menor de idade!");
    return;
  }

  //Escolha do Usuário
 escolhaJogador = prompt("Faça sua escolha: [1] Pedra, [2] Papel ou [3] Tesoura?")
 escolhaComputador = Math.floor(Math.random() * 3) + 1;

 //Verificação se o usuário digitou número errado
  if(escolhaJogador > 3 || escolhaJogador <1 || isNaN(escolhaJogador)){
     alert("Valor Inválido! Tente Novamente!");
    return;
   }

   //Exebição da escolha pelo jogar e computador
  alert("Escolha Jogador:  " + escolhaJogador + "  " + " - Escolha do Computador:  " + escolhaComputador)  
   
  //Fucionalidade do jogo
   if(escolhaJogador === escolhaComputador){
     alert("Empate!")
   }else if(
     (escolhaJogador === 1 && escolhaComputador === 3)|| // Pedra Ganha de Tesoura
     (escolhaJogador === 2 && escolhaComputador === 1)|| // Papel ganha de Pedra
     (escolhaJogador === 3 && escolhaComputador === 2)   // Tesoura ganha de Papel
   ){
     alert("Jogador Venceu!")     
    }else{
      alert("Computador Venceu!")
    }
  }
