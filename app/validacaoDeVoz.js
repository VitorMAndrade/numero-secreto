const somErro = new Audio('audio/som-erro.mp3')
const somAcerto = new Audio('audio/som-acerto.mp3')

let numeroAcertado = false


function verificaChute(chute){
 const numero = +chute;

 if(chuteInvalido(numero)){
    elementoChute.innerHTML += `<div>Valor invalido, você precia falar um NÚMERO entre ${menorValor} e ${maiorValor}</div>`;
 }

 if(numeroMaiorOuMenorPermitido(numero)){
    elementoChute.innerHTML += `<div>O número secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`;
 }

 if(numero === numeroSecreto){
   numeroAcertado = true
   somAcerto.play();
    document.body.innerHTML = `
        <h1>Você acertou!</h1>
        <h3>O número secreto era ${numeroSecreto}</h3>  
        <button id="jogar-novamente" class="btn-jogar">Jogar novamente!</button>
    `
    var end = Date.now() + (5 * 1000);
    var colors = ['#262626', '#f2f2f2'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());


 }else if(!numeroAcertado){
   somErro.play()
 
      if(numero > numeroSecreto){
         elementoChute.innerHTML+= `<div>O número secreto é menor <i class="fa-solid fa-down-long"></i></div>`
         
      }else{
         elementoChute.innerHTML+= `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
      }
}
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorPermitido(numero){
    return numero > maiorValor || numero < menorValor
 }

document.body.addEventListener('click', e => {
   if(e.target.id == 'jogar-novamente'){
      window.location.reload();
   }
})


