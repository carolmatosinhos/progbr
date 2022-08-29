let video = document.getElementById("video1");

function retroceder() {
    video.currentTime -= 15; //retroceder 15 segundos
}

function avancar() {
    video.currentTime += 15; //avançar 15 segundos
}

function diminuir_vel() {
    video.playbackRate -= 0.1;
}

function aumentar_vel() {
    video.playbackRate += 0.1;
}

function play() {
    video.play();
}

function stop() {
    video.pause();
    video.currentTime = 0; // faz o vídeo voltar para o inicio
}