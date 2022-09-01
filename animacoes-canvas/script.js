/* DESENHAR LINHA
let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");
ctx.moveTo(0, 0);
ctx.lineTo(250, 250);
ctx.lineTo(500, 0); 
ctx.stroke(); */

//DESENHAR RETÂNGULO
/* let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");
ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 200);*/

//PATH
/* let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

ctx.beginPath();

ctx.lineWidth = 4;
ctx.strokeStyle = "red";
ctx.moveTo(10, 10);
ctx.lineTo(400, 300);
ctx.stroke();

ctx.beginPath();

ctx.lineWidth = 7;
ctx.strokeStyle = "blue";
ctx.fillStyle = "green";
ctx.moveTo(50, 10);
ctx.lineTo(300, 300);
ctx.lineTo(200, 300);
ctx.closePath(); //fecha a linha
ctx.fill();
ctx.stroke(); */


//CÍRCULOS
/*let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");


let circle = {
    x: 250, //centro do círculo
    y: 250, //centro do círculo
    raio: 100,
    inicio: 0, //para o circulo usamos medidas radianas
    fim: 0,
}

function drawCircle(c) {

    ctx.beginPath();
    ctx.rect(0, 0, 500, 500); //faz a animação do círculo
    ctx.fillStyle = "rgb(248, 209, 195)"; //para funcionar, tenho que comentar o código do css
    ctx.fill();

    ctx.beginPath();
    ctx.strokeStyle = "red";
    ctx.fillStyle = "blue";
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim);

    ctx.fill();
    ctx.stroke();
}

setInterval(function () {

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3;
        circle.x += 3;
    }

    drawCircle(circle);
}, 40) */


let tela = document.getElementById("tela");
let ctx = tela.getContext("2d");

let img = new Image();
img.src = "./pacoca.jpg";

img.onload = desenharImg;

function desenharImg() {
    ctx.drawImage(this, 20, 20, 250, 200)
}

