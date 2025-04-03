
document.addEventListener('DOMContentLoaded',function(){
    
    alert("Bem vindo ao meu terceiro projeto da Imersão Dev - Alura")
    });

    document.getElementById("vamosLa").onclick = function() {
    rodada = 1;
    vitória = 0;               

        while(rodada <=3){

            escolhaJogador = prompt("Escolha um número entre 1 e 3");
            
            if(escolhaJogador < 1 || escolhaJogador > 3 || isNaN(escolhaJogador) ){
                alert("Opção Inválida!")

                escolhaComputador = Math.floor(Math.random()*3+1)
                
            }if(escolhaJogador == escolhaComputador){
                alert("Você Venceu a rodada:" + rodada)
                vitoria++
                
            } else{
                alert("Você perdeu! Tente novamente!")
                rodada = 10             
            }
            rodada++
        }       
            if(vitoria == 3){
             alert("Parabéns, você venceu 3 de 3 rodadas!")
            }            
     
         }
     
         
    