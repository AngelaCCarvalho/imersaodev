rodada = 1
while(rodada <=6){
  console.log('Rodada é:'+ rodada)
  
  escolhaJogador = prompt("Nível:"+rodada)
  pisoQuebrado = Math.floor(Math.random()*6)+1;
  
  if(escolhaJogador == pisoQuebrado){
    alert('Você conseguiu! Parabéns!')
  
    alert("Que pena, você perdeu! Tente novamente!")
  }
  rodada = rodada + 1
}
