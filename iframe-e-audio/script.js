let audio = document.getElementById("audio1");

function retroceder() {
    audio.currentTime -= 15;
}

function avancar() {
    audio.currentTime += 15;
}

function diminuir_vel() {
    audio.playbackRate -= 0.1;
}

function aumentar_vel() {
    audio.playbackRate += 0.1;
}

function stop() {
    audio.pause();
    audio.currentTime = 0;
}