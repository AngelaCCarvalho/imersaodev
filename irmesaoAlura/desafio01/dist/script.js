
//Alertas de Saudação
alert("Olá, Seja Bem vindo! Esse é meu primeiro projeto do Imersão Dev!")
alert("Click em *Bora Converter* para começar!")

function conversor(){
    alert("Em instante você começará a conversão!");
    valor_btc = prompt("Digite o valor em Bitcoin para conversão:")
    valor_rl = 477083.89;
    const valor = (valor_btc*valor_rl).toLocaleString('pt-Br', { style:'currency', currency:'BRL'});
    alert("O valor da conversão de BTC em Reais é :" + valor)};
