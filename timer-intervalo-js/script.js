//USANDO O TIMEOUT
/* function mudarCor() {
    let h = document.getElementsByTagName("h1")[0];
    h.style.color = "blue";
}

function mudarTexto() {
    let h = document.getElementsByTagName("h1")[0]; //pegar o primeiro elemento do array
    h.innerHTML = "Novo Título";

   //setTimeout(mudarCor, 3000) | O timer serve para quando quero executar um código, só que quero que tenha um delay antes da execução
    setInterval(, 3000)
}*/

// USANDO O SETINTERVAL

/* var numero = 0;

function atualizarTexto() {

    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
}

function mudarTexto() {
    setInterval(atualizarTexto, 3000); //O texto vai ser atualizado a cada 3 segundos
} */

var numero = 0;
var timer;

function atualizarTexto() {

    let h = document.getElementsByTagName("h1")[0];
    h.innerHTML += " " + numero;
    numero++;
}

function iniciar() {

    timer = setTimeout(atualizarTexto, 1000);
}

function parar() {

    clearTimeout(timer);
}


