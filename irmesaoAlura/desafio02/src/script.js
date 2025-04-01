idade = prompt("Qual a sua idade?");
let podeJogar = false;
if(idade>=18){
  alert("Você pode prosseguir e jogar Jokenpô");
  podeJogar = true;
 }else{
  alert("Voê não pode processeguir!")
 }
function jogar(){
  if(!podeJogar){
    alert("Não pode processeguir, você é menor de idade!");
    return;
  }
 escolhaJogador = prompt("Faça sua escolha: [1] Pedra, [2] Papel ou [3] Tesoura?")
 escolhaComputador = Math.floor(Math.random() * 3) + 1;
  if(escolhaJogador > 3){
     alert("Valor Inválido! Tente Novamente!")
    return;
   }
  alert("Escolha Jogador:  " + escolhaJogador + "  " + " - Escolha do Computador:  " +           escolhaComputador)  
   
   if(escolhaJogador == escolhaComputador){
     alert("Empate!")
   }else if(
     (escolhaJogador === 1 && escolhaComputador === 3)
     (escolhaJogador === 2 && escolhaComputador === 1
     (escolhaJogador === 3 && escolhaComputador === 2)
   ){
     alert("Jogador Venceu!")
     }else{
       alert("Computador Venceu!")
     }
  
   
}

